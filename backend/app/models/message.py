from sqlalchemy import Column, Integer, String, DateTime
from database import Base
from .user import Tourist, Agency

class Message(Base):
    __tablename__ = "messages"
    id = Column(Integer, primary_key=True, index=True)
    sender_id = Column(Integer, ForeignKey("tourists.id", ondelete="SET NULL"))
    receiver_id = Column(Integer, ForeignKey("agencies.id", ondelete="SET NULL"))
    message_text = Column(String, nullable=False)
    sent_at = Column(DateTime, default=lambda: datetime.utcnow())