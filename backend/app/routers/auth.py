from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.ext.asyncio import AsyncSession
from app.utils.database import get_db
from app.models.tourists import Tourist
from app.models.agencies import Agency
from app.utils.auth import verify_password, create_access_token
from sqlalchemy.future import select

router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")

@router.post("/login")
async def login(form_data: OAuth2PasswordRequestForm = Depends(), db: AsyncSession = Depends(get_db)):
    # Vérifier dans la table tourists
    result = await db.execute(select(Tourist).filter(Tourist.email == form_data.username))
    tourist = result.scalars().first()
    if tourist and verify_password(form_data.password, tourist.password_hash):
        return {
            "access_token": create_access_token({"sub": str(tourist.id), "type": "tourist"}),
            "token_type": "bearer"
        }

    # Vérifier dans la table agencies
    result = await db.execute(select(Agency).filter(Agency.email == form_data.username))
    agency = result.scalars().first()
    if agency and verify_password(form_data.password, agency.password_hash):
        return {
            "access_token": create_access_token({"sub": str(agency.id), "type": "agency"}),
            "token_type": "bearer"
        }

    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")