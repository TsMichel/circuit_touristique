from sqlalchemy import Column, Integer, String, DateTime, Float
from database import Base
from .user import Agency  # Import pour la relation

class Circuit(Base):
    __tablename__ = "circuits"
    id = Column(Integer, primary_key=True, index=True)
    region = Column(String(100), nullable=False)
    activity_type = Column(String(100), nullable=False)
    itinerary = Column(String, nullable=False)
    duration = Column(Integer, nullable=False)
    price = Column(Float(precision=2), nullable=False)
    max_group_size = Column(Integer, nullable=False)
    languages = Column(String(100), nullable=False)
    agency_id = Column(Integer, ForeignKey("agencies.id", ondelete="SET NULL"))
    created_at = Column(DateTime, default=lambda: datetime.utcnow())