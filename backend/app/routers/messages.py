from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models.messages import Message
from models.user import Tourist, Agency
from jose import jwt, JWTError
from fastapi.security import OAuth2PasswordBearer

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")
SECRET_KEY = "your-secret-key"
ALGORITHM = "HS256"

@router.post("/send/")
def send_message(message_data: dict, current_tourist: Tourist = Depends(get_current_tourist), db: Session = Depends(get_db)):
    message = Message(sender_id=current_tourist.id, **message_data)
    db.add(message)
    db.commit()
    db.refresh(message)
    return {"message": "Message envoyé", "message_id": message.id}

@router.get("/inbox/")
def get_inbox(current_agency: Agency = Depends(get_current_agency), db: Session = Depends(get_db)):
    messages = db.query(Message).filter(Message.receiver_id == current_agency.id).all()
    return messages