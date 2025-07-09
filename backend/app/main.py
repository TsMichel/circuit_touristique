from fastapi import FastAPI
<<<<<<< HEAD
from fastapi.middleware.cors import CORSMiddleware
from routers import auth, agency, tourist, circuits, reservations, messages

app = FastAPI(title="Circuit Touristique API")

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
=======
from .routers import auth, agency, tourist, circuits, reservations, messages

app = FastAPI()

>>>>>>> 0a7eb321b64a755a247a42216caaf9011885f46f
app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(agency.router, prefix="/agency", tags=["agency"])
app.include_router(tourist.router, prefix="/tourist", tags=["tourist"])
app.include_router(circuits.router, prefix="/circuits", tags=["circuits"])
app.include_router(reservations.router, prefix="/reservations", tags=["reservations"])
<<<<<<< HEAD
app.include_router(messages.router, prefix="/messages", tags=["messages"])

@app.get("/")
async def root():
    return {"message": "Welcome to Circuit Touristique API"}
=======
app.include_router(messages.router, prefix="/messages", tags=["messages"])
>>>>>>> 0a7eb321b64a755a247a42216caaf9011885f46f
