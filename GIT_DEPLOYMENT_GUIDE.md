# Git & Deployment Guide

## 📦 Part 1: Pushing to Git

### Step 1: Initialize Git Repository (if not already done)

```bash
cd C:\Users\Ntokozo\Project4_Store_Sales_Forecasting
git init
```

### Step 2: Add All Files

```bash
git add .
```

### Step 3: Create Initial Commit

```bash
git commit -m "Complete frontend reconstruction with dark mode and glassmorphism"
```

### Step 4: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **+** icon → **New repository**
3. Name it: `Store-Sales-Forecasting`
4. **Do NOT** initialize with README (you already have files)
5. Click **Create repository**

### Step 5: Link Local Repository to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/Store-Sales-Forecasting.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

---

## 🚀 Part 2: Deployment Options

I recommend **Option 1** for the easiest deployment with your tech stack.

---

## ✨ **Option 1: Render (RECOMMENDED - Free & Easy)**

**Why Render?**
- ✅ Free tier available
- ✅ Supports both Python (FastAPI) and Node.js (React)
- ✅ Auto-deploys from GitHub
- ✅ Easy environment variable management
- ✅ No credit card required for free tier

### Backend Deployment (FastAPI on Render)

#### 1. Create `render.yaml` in project root:

```yaml
services:
  - type: web
    name: walmart-forecast-backend
    env: python
    buildCommand: "pip install -r backend/requirements.txt"
    startCommand: "cd backend && uvicorn main:app --host 0.0.0.0 --port $PORT"
    envVars:
      - key: PYTHON_VERSION
        value: 3.11.0
```

#### 2. Update `backend/main.py` CORS settings:

Replace the CORS section with:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://your-frontend-url.onrender.com"  # Add after deploying frontend
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

#### 3. Deploy on Render:

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **New +** → **Web Service**
3. Connect your GitHub repository
4. Configure:
   - **Name:** `walmart-forecast-backend`
   - **Environment:** `Python 3`
   - **Build Command:** `pip install -r backend/requirements.txt`
   - **Start Command:** `cd backend && uvicorn main:app --host 0.0.0.0 --port $PORT`
5. Click **Create Web Service**
6. **Copy the backend URL** (e.g., `https://walmart-forecast-backend.onrender.com`)

### Frontend Deployment (React on Render)

#### 1. Update `frontend/src/pages/Home.jsx`, `Data.jsx`:

Replace `http://localhost:8000` with your Render backend URL:

```javascript
const API_URL = import.meta.env.VITE_API_URL || 'https://walmart-forecast-backend.onrender.com';

// Then use it like:
fetch(`${API_URL}/api/predictions`)
```

#### 2. Create `frontend/.env.production`:

```
VITE_API_URL=https://walmart-forecast-backend.onrender.com
```

#### 3. Deploy Frontend on Render:

1. Click **New +** → **Static Site**
2. Connect your GitHub repository
3. Configure:
   - **Name:** `walmart-forecast-frontend`
   - **Root Directory:** `frontend`
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
4. Add Environment Variable:
   - **Key:** `VITE_API_URL`
   - **Value:** `https://walmart-forecast-backend.onrender.com`
5. Click **Create Static Site**

---

## 🔷 **Option 2: Vercel (Frontend) + Render (Backend)**

**Best for:** Fastest frontend performance

### Backend: Same as Option 1 (Render)

### Frontend: Vercel

1. Go to [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Configure:
   - **Framework Preset:** Vite
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Add Environment Variable:
   - `VITE_API_URL` = your Render backend URL
5. Deploy!

---

## 🐳 **Option 3: Railway (Full Stack)**

**Best for:** Simplest all-in-one deployment

1. Go to [Railway](https://railway.app)
2. Create new project from GitHub repo
3. Railway auto-detects both services
4. Add environment variables
5. Deploy!

---

## 📝 Environment Variables Summary

### Backend (.env)
```
# Not needed for basic deployment
```

### Frontend (.env.production)
```
VITE_API_URL=https://your-backend-url.onrender.com
```

---

## ⚠️ Important Notes

### Data Files
Your CSV files are large. For deployment:
- **Option A:** Keep them in the repo (works if < 100MB)
- **Option B:** Upload to cloud storage (AWS S3, Google Cloud Storage)
- **Option C:** Use a database (PostgreSQL on Render free tier)

### Free Tier Limitations
- **Render Free:** Services sleep after 15 min of inactivity (takes ~30s to wake up)
- **Vercel Free:** Unlimited bandwidth, 100GB/month
- **Railway Free:** $5 credit/month

---

## 🎯 Recommended Deployment Flow

1. **Push to GitHub** (Steps above)
2. **Deploy Backend to Render** (Get backend URL)
3. **Update frontend API URL** with backend URL
4. **Deploy Frontend to Render or Vercel**
5. **Update backend CORS** with frontend URL
6. **Test everything!**

---

## 🔧 Quick Deploy Commands

After setting up on Render/Vercel, future updates are automatic:

```bash
git add .
git commit -m "Your update message"
git push origin main
```

Both services will auto-deploy on push! 🚀

---

## 📞 Need Help?

- Render Docs: https://render.com/docs
- Vercel Docs: https://vercel.com/docs
- Railway Docs: https://docs.railway.app

Let me know if you need help with any step!
