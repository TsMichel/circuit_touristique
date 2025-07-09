from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models.user import Tourist, Agency
from schemas import UserCreate, Token
from jose import jwt, JWTError
from passlib.context import CryptContext
from datetime import datetime, timedelta

router = APIRouter()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
SECRET_KEY = "your-secret-key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

def create_access_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

@router.post("/register/{user_type}", response_model=UserCreate)
def register(user_type: str, user: UserCreate, db: Session = Depends(get_db)):
    if user_type == "tourist":
        db_user = Tourist(email=user.email, password_hash=pwd_context.hash(user.password), name=user.name)
        db.add(db_user)
    elif user_type == "agency":
        db_user = Agency(email=user.email, password_hash=pwd_context.hash(user.password), name=user.name)
        db.add(db_user)
    else:
        raise HTTPException(status_code=400, detail="Type d'utilisateur invalide")
    db.commit()
    db.refresh(db_user)
    return db_user

@router.post("/login", response_model=Token)
def login(email: str, password: str, db: Session = Depends(get_db)):
    user = db.query(Tourist).filter(Tourist.email == email).first()
    if not user:
        user = db.query(Agency).filter(Agency.email == email).first()
    if not user or not pwd_context.verify(password, user.password_hash):
        raise HTTPException(status_code=401, detail="Email ou mot de passe incorrect")
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(data={"sub": str(user.id), "type": user.__tablename__}, expires_delta=access_token_expires)
    return {"access_token": access_token, "token_type": "bearer"}