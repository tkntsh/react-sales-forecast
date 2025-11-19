# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
@app.get("/api/predictions")
async def get_predictions():
    file_path = "data/predictions.csv"
    if not os.path.exists(file_path):
        return {"error": "predictions.csv not found"}
    df = pd.read_csv(file_path)
    return df.to_dict(orient="records")

@app.get("/api/summary")
async def get_summary():
    file_path = "data/clean_data.csv"
    if not os.path.exists(file_path):
        return {"error": "clean_data.csv not found"}
    df = pd.read_csv(file_path)
    return {
        "total_stores": int(df['Store'].nunique()),
# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
@app.get("/api/predictions")
async def get_predictions():
    file_path = "data/predictions.csv"
    if not os.path.exists(file_path):
        return {"error": "predictions.csv not found"}
    df = pd.read_csv(file_path)
    return df.to_dict(orient="records")

@app.get("/api/summary")
async def get_summary():
    file_path = "data/clean_data.csv"
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
    file_path = "data/clean_data.csv"
    if not os.path.exists(file_path):
        return {"error": "clean_data.csv not found"}
    df = pd.read_csv(file_path)
    # Return first 100 rows to avoid performance issues
    return df.head(100).to_dict(orient="records")

@app.get("/images/metric.png")
async def get_metric_image():
    file_path = "metric.png"
    if not os.path.exists(file_path):
        return {"error": "metric.png not found"}
    return FileResponse(file_path)