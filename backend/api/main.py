import logging
import os
import uvicorn
from fastapi import FastAPI, Request
from fastapi.openapi.utils import get_openapi
from fastapi.middleware.cors import CORSMiddleware
from . import schemas
import logging
from fastapi import APIRouter, BackgroundTasks
from starlette.responses import JSONResponse
from fastapi_mail import FastMail, MessageSchema
from .config import email_conf, settings
from .utils import compute_cost_estimate

logger = logging.getLogger(__name__)


app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["Content-Disposition"]
)


@app.post("/api/v1/send_email")
async def send_email(
        email: schemas.EmailSchema,
        background_tasks: BackgroundTasks,
) -> JSONResponse:
    data = email.dict()

    message = MessageSchema(
        subject=email.body.title,
        recipients=data.get("recipients"),  # List of recipients, as many as you can pass
        template_body=data.get("body"),
    )

    fm = FastMail(email_conf)

    background_tasks.add_task(fm.send_message, message, template_name="email.html")

    return JSONResponse(status_code=200, content={"message": "email has been sent"})


@app.post("/api/v1/costs/estimation", response_model=schemas.CostEstimation)
def get_cost_estimation(settings: schemas.ReviewSettings):
    return compute_cost_estimate(settings)


if __name__ == "__main__":
    # uvicorn app --port 5000 --ssl-keyfile=./key.pem --ssl-certfile=./cert.pem
    uvicorn.run(app)
    # uvicorn.run(app, host="0.0.0.0", port=5005,
    #             ssl_certfile="/secrets/certs/aida-backend.pem",
    #             ssl_keyfile="/secrets/certs/aida-backend-key.pem")
