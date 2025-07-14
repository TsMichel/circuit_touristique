# code par defaut de lancement du serveur backend

from typing import Union

from fastapi import FastAPI
from app.routers import auth, agency, tourist, circuits, reservations, messages

app = FastAPI()


@app.get("/")
def read_root():
    return {"bonjours": "voici ce que je viens d'ecrire"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


    app.include_router(auth.router, prefix="/auth", tags=["auth"])
    app.include_router(agency.router, prefix="/agency", tags=["agency"])
    app.include_router(tourist.router, prefix="/tourist", tags=["tourist"])
    app.include_router(circuits.router, prefix="/circuits", tags=["circuits"])
    app.include_router(reservations.router, prefix="/reservations", tags=["reservations"])
    app.include_router(messages.router, prefix="/messages", tags=["messages"])
