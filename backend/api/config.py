import os
from typing import List
from fastapi_mail import ConnectionConfig
from pydantic import BaseSettings, EmailStr


class Settings(BaseSettings):
    app_host: str = "0.0.0.0"
    app_port: int = 5005
    origins: List[str] = ["http://localhost:3000", "https://laer.ai", "https://staging.laer.ai"]

    MAIL_USERNAME: str = ""
    MAIL_PASSWORD: str = ""
    MAIL_PORT: int = 0
    MAIL_SERVER: str = ""
    MAIL_FROM: EmailStr = "support@laer.ai"
    MAIL_FROM_NAME: str = ""

    class Config:
        env_file = ".env"


settings = Settings()


email_conf = ConnectionConfig(
    MAIL_USERNAME=settings.MAIL_USERNAME,
    MAIL_PASSWORD=settings.MAIL_PASSWORD,
    MAIL_FROM=settings.MAIL_FROM,
    MAIL_PORT=settings.MAIL_PORT,
    MAIL_SERVER=settings.MAIL_SERVER,
    MAIL_FROM_NAME=settings.MAIL_FROM_NAME,
    MAIL_TLS=True,
    MAIL_SSL=False,
    USE_CREDENTIALS=True,
    VALIDATE_CERTS=True,
    TEMPLATE_FOLDER=os.path.join(os.path.abspath(os.path.dirname(__file__)), "templates")
)
