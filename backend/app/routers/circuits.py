from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models.circuit import Circuit
from jose import jwt, JWTError
from fastapi.security import OAuth2PasswordBearer

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")
SECRET_KEY = "your-secret-key"
ALGORITHM = "HS256"

@router.get("/")
def get_circuits(region: str = None, db: Session = Depends(get_db)):
    query = db.query(Circuit)
    if region:
        query = query.filter(Circuit.region == region)
    return query.all()

@router.post("/create/", response_model=dict)
def create_circuit(circuit_data: dict, current_agency: dict = Depends(get_current_agency), db: Session = Depends(get_db)):
    circuit = Circuit(**circuit_data, agency_id=current_agency.id)
    db.add(circuit)
    db.commit()
    db.refresh(circuit)
    return {"message": "Circuit créé", "circuit_id": circuit.id}