from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.utils.database import get_db
from app.utils.auth import get_current_user
from app.models.reservations import Reservation
from app.models.circuits import Circuit
from app.schemas.reservations import Reservation, ReservationCreate

router = APIRouter()

@router.get("/", response_model=list[Reservation])
async def get_reservations(db: AsyncSession = Depends(get_db), current_user: dict = Depends(get_current_user)):
    if current_user["type"] == "tourist":
        query = select(Reservation).filter(Reservation.tourist_id == current_user["id"])
    elif current_user["type"] == "agency":
        query = select(Reservation).join(Circuit).filter(Circuit.agency_id == current_user["id"])
    else:
        raise HTTPException(status_code=403, detail="Accès non autorisé")
    result = await db.execute(query)
    return result.scalars().all()

@router.post("/", response_model=Reservation)
async def create_reservation(reservation: ReservationCreate, db: AsyncSession = Depends(get_db), current_user: dict = Depends(get_current_user)):
    if current_user["type"] != "tourist":
        raise HTTPException(status_code=403, detail="Seuls les touristes peuvent créer des réservations")
    db_reservation = Reservation(**reservation.dict(), tourist_id=current_user["id"])
    db.add(db_reservation)
    await db.commit()
    await db.refresh(db_reservation)
    return db_reservation