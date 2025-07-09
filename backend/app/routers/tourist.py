from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models.user import Tourist
from jose import jwt, JWTError
from fastapi.security import OAuth2PasswordBearer

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")
SECRET_KEY = "your-secret-key"
ALGORITHM = "HS256"

def get_current_tourist(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id = payload.get("sub")
        if not user_id or payload.get("type") != "tourists":
            raise HTTPException(status_code=401, detail="Accès non autorisé")
        tourist = db.query(Tourist).filter(Tourist.id == int(user_id)).first()
        if not tourist:
            raise HTTPException(status_code=404, detail="Touriste non trouvé")
        return tourist
    except JWTError:
        raise HTTPException(status_code=401, detail="Token invalide")

@router.get("/dashboard/")
def get_tourist_dashboard(current_tourist: Tourist = Depends(get_current_tourist), db: Session = Depends(get_db)):
    return {"tourist_name": current_tourist.name, "message": "Bienvenue sur votre tableau de bord"}