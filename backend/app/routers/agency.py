from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models.user import Agency
from models.circuit import Circuit
from jose import jwt, JWTError
from fastapi.security import OAuth2PasswordBearer

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")
SECRET_KEY = "your-secret-key"
ALGORITHM = "HS256"

def get_current_agency(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id = payload.get("sub")
        if not user_id or payload.get("type") != "agencies":
            raise HTTPException(status_code=401, detail="Accès non autorisé")
        agency = db.query(Agency).filter(Agency.id == int(user_id)).first()
        if not agency:
            raise HTTPException(status_code=404, detail="Agence non trouvée")
        return agency
    except JWTError:
        raise HTTPException(status_code=401, detail="Token invalide")

@router.get("/dashboard/")
def get_agency_dashboard(current_agency: Agency = Depends(get_current_agency), db: Session = Depends(get_db)):
    circuits = db.query(Circuit).filter(Circuit.agency_id == current_agency.id).all()
    return {"circuits_count": len(circuits), "agency_name": current_agency.name}