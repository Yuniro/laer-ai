import datetime
from typing import List, Union
from pydantic import BaseModel
from pydantic import EmailStr


class EmailBody(BaseModel):
    name: str
    title: str
    text: List[str] = []


class EmailSchema(BaseModel):
    recipients: List[EmailStr]
    body: EmailBody


class ReviewSettings(BaseModel):
    number_of_reviewers: int = 10
    number_of_documents: int = 100000
    cost_per_document: int = 1
    docs_per_hour: int = 30


class CostEstimation(BaseModel):
    manual_review_cost: int
    competitor_review_cost: int
    aida_cost: int
    estimated_manual_cost_savings: int
    estimated_competitor_cost_savings: int
    estimated_review_days: int
