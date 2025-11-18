# 🚀 Quick Start Guide - Git & Deployment

## ✅ Your Application is Now Running!

**Backend:** `http://localhost:8000`  
**Frontend:** `http://localhost:5173`

---

## 📦 Step 1: Push to GitHub

### Initialize and Push

```bash
cd C:\Users\Ntokozo\Project4_Store_Sales_Forecasting

# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Complete frontend reconstruction with dark mode and glassmorphism"

# Create repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/Store-Sales-Forecasting.git
git branch -M main
git push -u origin main
```

---

## 🌐 Step 2: Deploy (RECOMMENDED: Render)

### Why Render?
- ✅ **FREE** tier
- ✅ Auto-deploys from GitHub
- ✅ Supports Python + React
- ✅ No credit card required

### Deploy Backend

1. Go to [render.com](https://render.com)
2. Click **New +** → **Web Service**
3. Connect your GitHub repo
4. Settings:
   - **Name:** `walmart-forecast-backend`
   - **Environment:** `Python 3`
   - **Build Command:** `pip install -r backend/requirements.txt`
   - **Start Command:** `cd backend && uvicorn main:app --host 0.0.0.0 --port $PORT`
5. Click **Create Web Service**
6. **COPY THE URL** (e.g., `https://walmart-forecast-backend.onrender.com`)

### Deploy Frontend

1. Click **New +** → **Static Site**
2. Connect your GitHub repo
3. Settings:
   - **Name:** `walmart-forecast-frontend`
   - **Root Directory:** `frontend`
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
4. **Environment Variables:**
   - Key: `VITE_API_URL`
   - Value: `https://walmart-forecast-backend.onrender.com` (your backend URL)
5. Click **Create Static Site**

### Update Backend CORS

After deploying frontend, update `backend/main.py`:

```python
allow_origins=[
    "http://localhost:5173",
    "https://your-frontend-url.onrender.com"  # Add your frontend URL here
]
```

Then commit and push:
```bash
git add .
git commit -m "Update CORS for production"
git push
```

---

## 🎯 Alternative: Vercel (Frontend Only)

1. Go to [vercel.com](https://vercel.com)
2. Import GitHub repo
3. Settings:
   - **Framework:** Vite
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Environment Variable:
   - `VITE_API_URL` = your Render backend URL
5. Deploy!

---

## 📝 Files Created for You

✅ `.gitignore` - Excludes unnecessary files  
✅ `README.md` - Professional project documentation  
✅ `GIT_DEPLOYMENT_GUIDE.md` - Detailed deployment guide  
✅ `frontend/.env.example` - Environment variable template  
✅ `frontend/src/config.js` - API URL configuration  

---

## 🔄 Future Updates

After initial deployment, just push to GitHub:

```bash
git add .
git commit -m "Your update message"
git push
```

Both Render and Vercel will auto-deploy! 🚀

---

## 💡 Pro Tips

- **Free Tier:** Render services sleep after 15 min inactivity (30s wake time)
- **Data Files:** Your CSVs are included in the repo (works if < 100MB)
- **Environment Variables:** Always use `VITE_API_URL` for the frontend

---

Need help? Check `GIT_DEPLOYMENT_GUIDE.md` for more details!
