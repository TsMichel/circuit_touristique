from pydantic import BaseModel
from datetime import datetime
from typing import Optional, List, Dict

class CircuitBase(BaseModel):
    region: str
    activity_type: str
    itinerary: str
    duration: int
    price: float
    max_group_size: int
    languages: str
    coordinates: Optional[str] = None
    agency_id: Optional[int] = None

class CircuitCreate(CircuitBase):
    pass

class Circuit(CircuitBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True