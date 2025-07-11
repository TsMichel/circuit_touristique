from fastapi import FastAPI
from .routers import auth, agency, tourist, circuits, reservations, messages

app = FastAPI()

app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(agency.router, prefix="/agency", tags=["agency"])
app.include_router(tourist.router, prefix="/tourist", tags=["tourist"])
app.include_router(circuits.router, prefix="/circuits", tags=["circuits"])
app.include_router(reservations.router, prefix="/reservations", tags=["reservations"])
app.include_router(messages.router, prefix="/messages", tags=["messages"])