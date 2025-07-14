from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

class TouristBase(BaseModel):
    email: EmailStr
    name: Optional[str] = None

class TouristCreate(TouristBase):
    password: str

class Tourist(TouristBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True