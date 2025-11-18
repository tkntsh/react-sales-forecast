# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
import pandas as pd
import os

app = FastAPI(title="Walmart Sales Forecast API")

# === CORS: ALLOW FRONTEND ===
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # Local development
        "https://*.vercel.app",   # Vercel preview deployments  
        "https://react-sales-forecast.vercel.app"  # Production (update with your actual URL)
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# ===========================

@app.get("/")
async def root():
    return {"message": "Walmart Forecast API is running!"}

@app.get("/api/predictions")
async def get_predictions():
    file_path = "../forecasting/data/predictions.csv"
    if not os.path.exists(file_path):
        return {"error": "predictions.csv not found"}
    df = pd.read_csv(file_path)
    return df.to_dict(orient="records")

@app.get("/api/summary")
async def get_summary():
    file_path = "../forecasting/data/clean_data.csv"
    if not os.path.exists(file_path):
        return {"error": "clean_data.csv not found"}
    df = pd.read_csv(file_path)
    return {
        "total_stores": int(df['Store'].nunique()),
        "total_weeks": int(df['Date'].nunique()),
        "avg_weekly_sales": round(float(df['Weekly_Sales'].mean()), 2),
        "max_sales": float(df['Weekly_Sales'].max()),
        "holiday_weeks": int(df['IsHoliday'].sum())
    }

@app.get("/api/clean-data")
async def get_clean_data():
    file_path = "../forecasting/data/clean_data.csv"
    if not os.path.exists(file_path):
        return {"error": "clean_data.csv not found"}
    df = pd.read_csv(file_path)
    # Return first 1000 rows to avoid performance issues
    return df.head(1000).to_dict(orient="records")

@app.get("/images/metric.png")
async def get_metric_image():
    file_path = "../forecasting/metric.png"
    if not os.path.exists(file_path):
        return {"error": "metric.png not found"}
    return FileResponse(file_path)