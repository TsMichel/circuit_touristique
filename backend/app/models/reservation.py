from sqlalchemy import Column, Integer, Date, String, DateTime
from database import Base
from .user import Tourist
from .circuit import Circuit

class Reservation(Base):
    __tablename__ = "reservations"
    id = Column(Integer, primary_key=True, index=True)
    circuit_id = Column(Integer, ForeignKey("circuits.id", ondelete="SET NULL"))
    tourist_id = Column(Integer, ForeignKey("tourists.id", ondelete="SET NULL"))
    reservation_date = Column(Date, nullable=False)
    number_of_people = Column(Integer, nullable=False)
    status = Column(String(20), default="pending", nullable=False)
    created_at = Column(DateTime, default=lambda: datetime.utcnow())