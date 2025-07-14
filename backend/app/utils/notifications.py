import smtplib
from email.mime.text import MIMEText
from app.utils.config import settings

async def send_email(to_email: str, subject: str, body: str):
    msg = MIMEText(body)
    msg["Subject"] = subject
    msg["From"] = "no-reply@circuit-touristique.com"
    msg["To"] = to_email

    with smtplib.SMTP("smtp.gmail.com", 587) as server:
        server.starttls()
        server.login(settings.email_user, settings.email_password)
        server.send_message(msg)