from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models.reservation import Reservation
from models.user import Tourist
from jose import jwt, JWTError
from fastapi.security import OAuth2PasswordBearer

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")
SECRET_KEY = "your-secret-key"
ALGORITHM = "HS256"

@router.post("/create/")
def create_reservation(reservation_data: dict, current_tourist: Tourist = Depends(get_current_tourist), db: Session = Depends(get_db)):
    reservation = Reservation(tourist_id=current_tourist.id, **reservation_data)
    db.add(reservation)
    db.commit()
    db.refresh(reservation)
    return {"message": "Réservation créée", "reservation_id": reservation.id}

@router.get("/tourist/")
def get_tourist_reservations(current_tourist: Tourist = Depends(get_current_tourist), db: Session = Depends(get_db)):
    reservations = db.query(Reservation).filter(Reservation.tourist_id == current_tourist.id).all()
    return reservations