from sqlalchemy import Column, Integer, String, DateTime
from database import Base
from .user import Tourist
from .circuit import Circuit

class Review(Base):
    __tablename__ = "reviews"
    id = Column(Integer, primary_key=True, index=True)
    circuit_id = Column(Integer, ForeignKey("circuits.id", ondelete="SET NULL"))
    tourist_id = Column(Integer, ForeignKey("tourists.id", ondelete="SET NULL"))
    rating = Column(Integer, nullable=True)
    comment = Column(String)
    created_at = Column(DateTime, default=lambda: datetime.utcnow())