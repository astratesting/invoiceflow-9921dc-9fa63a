from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import uvicorn

app = FastAPI(
    title="InvoiceFlow API",
    description="Backend API for InvoiceFlow - Freelance Invoicing SaaS",
    version="1.0.0"
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://invoiceflow.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class InvoiceItem(BaseModel):
    description: str
    quantity: float
    rate: float
    amount: float

class InvoiceCreate(BaseModel):
    client_id: str
    items: List[InvoiceItem]
    subtotal: float
    tax: float
    total: float
    due_date: str
    notes: Optional[str] = None

class ClientCreate(BaseModel):
    name: str
    email: str
    company: Optional[str] = None
    address: Optional[str] = None

# Health check endpoint
@app.get("/")
async def root():
    return {
        "message": "InvoiceFlow API is running",
        "version": "1.0.0",
        "status": "healthy"
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

# Invoice endpoints (for batch processing, reporting, etc.)
@app.post("/api/invoices/generate-pdf")
async def generate_invoice_pdf(invoice_id: str):
    """
    Generate PDF for an invoice (batch processing)
    This could be used for bulk PDF generation
    """
    # Placeholder for PDF generation logic
    return {
        "invoice_id": invoice_id,
        "pdf_url": f"https://storage.invoiceflow.app/invoices/{invoice_id}.pdf",
        "status": "generated"
    }

@app.post("/api/invoices/send-batch")
async def send_batch_invoices(invoice_ids: List[str]):
    """
    Send multiple invoices at once
    Useful for monthly billing runs
    """
    # Placeholder for batch sending logic
    return {
        "invoices_sent": len(invoice_ids),
        "status": "queued"
    }

# Reporting endpoints
@app.get("/api/reports/revenue")
async def get_revenue_report(user_id: str, start_date: str, end_date: str):
    """
    Generate revenue report for a user
    """
    # Placeholder for report generation logic
    return {
        "user_id": user_id,
        "period": f"{start_date} to {end_date}",
        "total_revenue": 0.0,
        "paid_invoices": 0,
        "pending_invoices": 0,
        "overdue_invoices": 0
    }

@app.get("/api/reports/clients")
async def get_client_report(user_id: str):
    """
    Generate client report (total billed, payment history, etc.)
    """
    # Placeholder for client report logic
    return {
        "user_id": user_id,
        "clients": [],
        "total_billed": 0.0,
        "average_payment_time": 0
    }

# Analytics endpoints
@app.get("/api/analytics/payment-times")
async def get_payment_times(user_id: str):
    """
    Analyze average payment times for a user's clients
    """
    # Placeholder for analytics logic
    return {
        "user_id": user_id,
        "average_payment_days": 0,
        "fastest_payer": None,
        "slowest_payer": None
    }

# Webhook endpoints for external integrations
@app.post("/api/webhooks/quickbooks")
async def quickbooks_webhook(payload: dict):
    """
    Webhook for QuickBooks integration
    """
    # Placeholder for QuickBooks integration
    return {"status": "received"}

@app.post("/api/webhooks/xero")
async def xero_webhook(payload: dict):
    """
    Webhook for Xero integration
    """
    # Placeholder for Xero integration
    return {"status": "received"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
