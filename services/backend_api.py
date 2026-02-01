
"""
Premium Tutor Platform - Backend Architecture (Simulated)
Target: FastAPI / Python 3.10+
"""

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="Akalanka Ranasinghe Tutoring API")

class StudentApplication(BaseModel):
    name: str
    grade: str
    school: str
    contact: str
    reason: Optional[str] = None

@app.post("/api/v1/applications/submit")
async def apply_for_class(app: StudentApplication):
    # This logic is currently handled by frontend WhatsApp redirect.
    # Future enhancement: Store in DB and send email notification.
    return {"status": "success", "message": "Application generated successfully"}

@app.get("/api/v1/schedule")
async def get_schedule():
    return [
        {"id": "1", "class": "Year 10/11", "day": "Wednesday", "time": "15:30-18:30"},
        {"id": "2", "class": "Primary", "day": "Friday", "time": "Evening"}
    ]

# RUNNING THE SERVER:
# uvicorn backend_api:app --reload
