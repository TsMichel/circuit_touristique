# # code par defaut de lancement du serveur backend

# from typing import Union

# from fastapi import FastAPI
# from app.routers import auth, agency, tourist, circuits, reservations, messages

# app = FastAPI()


# @app.get("/")
# def read_root():
#     return {"bonjours": "voici ce que je viens d'ecrire"}


# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}


#     app.include_router(auth.router, prefix="/auth", tags=["auth"])
#     app.include_router(agency.router, prefix="/agency", tags=["agency"])
#     app.include_router(tourist.router, prefix="/tourist", tags=["tourist"])
#     app.include_router(circuits.router, prefix="/circuits", tags=["circuits"])
#     app.include_router(reservations.router, prefix="/reservations", tags=["reservations"])
#     app.include_router(messages.router, prefix="/messages", tags=["messages"])


from fastapi import FastAPI
from app.routers import auth, agencies, tourists, circuits, reservations, reviews, messages, stats, availabilities
from app.utils.database import engine
from app.models import tourists, agencies, circuits, reservations, reviews, messages, availabilities
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Circuit Touristique API")

# Configurer CORS pour permettre les requêtes depuis le frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # URL de votre frontend Next.js
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Inclure les routeurs
app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(agencies.router, prefix="/agencies", tags=["agencies"])
app.include_router(tourists.router, prefix="/tourists", tags=["tourists"])
app.include_router(circuits.router, prefix="/circuits", tags=["circuits"])
app.include_router(reservations.router, prefix="/reservations", tags=["reservations"])
app.include_router(reviews.router, prefix="/reviews", tags=["reviews"])
app.include_router(messages.router, prefix="/messages", tags=["messages"])
app.include_router(stats.router, prefix="/stats", tags=["stats"])
app.include_router(availabilities.router, prefix="/availabilities", tags=["availabilities"])

# Créer les tables au démarrage (optionnel, si non géré par le script SQL)
@app.on_event("startup")
async def startup():
    async with engine.begin() as conn:
        await conn.run_sync(tourists.Base.metadata.create_all)