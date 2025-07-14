from sqlalchemy import Column, Integer, String, Text, Float, DateTime, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class Circuit(Base):
    __tablename__ = "circuits"
    id = Column(Integer, primary_key=True, index=True)
    region = Column(String(100), nullable=False)
    activity_type = Column(String(100), nullable=False)
    itinerary = Column(Text, nullable=False)
    duration = Column(Integer, nullable=False)
    price = Column(Float, nullable=False)
    max_group_size = Column(Integer, nullable=False)
    languages = Column(String(100), nullable=False)
    coordinates = Column(Text)
    agency_id = Column(Integer, ForeignKey("agencies.id"), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)