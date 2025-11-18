# 📊 Walmart Store Sales Forecasting Dashboard

A modern, full-stack web application for visualizing and forecasting Walmart store sales using machine learning. Features a stunning dark mode interface with glassmorphism effects.

![Tech Stack](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react)
![FastAPI](https://img.shields.io/badge/FastAPI-Latest-009688?logo=fastapi)
![Python](https://img.shields.io/badge/Python-3.11+-3776AB?logo=python)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite)

## ✨ Features

- 🌙 **Dark Mode UI** with glassmorphism effects
- 📈 **Interactive Charts** powered by Chart.js
- 🔍 **Data Search & Pagination** for exploring datasets
- 🤖 **ML Ensemble** combining Random Forest, ARIMA, and Exponential Smoothing
- 📱 **Fully Responsive** design
- ⚡ **Fast & Modern** built with Vite and React 19

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework
- **Vite** - Build tool
- **Chart.js** - Data visualization
- **React Router** - Navigation
- **Custom CSS** - Dark mode with glassmorphism

### Backend
- **FastAPI** - Python web framework
- **Pandas** - Data processing
- **Scikit-learn** - Machine learning
- **Statsmodels** - Time series analysis

## 🚀 Quick Start

### Prerequisites
- Python 3.11+
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/Store-Sales-Forecasting.git
cd Store-Sales-Forecasting
```

2. **Backend Setup**
```bash
# Create and activate virtual environment
python -m venv venv
.\venv\Scripts\Activate.ps1  # Windows
source venv/bin/activate      # macOS/Linux

# Install dependencies
cd backend
pip install -r requirements.txt
```

3. **Frontend Setup**
```bash
cd frontend
npm install
```

### Running Locally

1. **Start Backend** (Terminal 1)
```bash
cd backend
uvicorn main:app --reload
```
Backend runs at `http://localhost:8000`

2. **Start Frontend** (Terminal 2)
```bash
cd frontend
npm run dev
```
Frontend runs at `http://localhost:5173`

## 📁 Project Structure

```
Store-Sales-Forecasting/
├── backend/
│   ├── main.py              # FastAPI application
│   └── requirements.txt     # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/          # Page components
│   │   ├── App.jsx         # Main app component
│   │   └── index.css       # Global styles
│   ├── package.json        # Node dependencies
│   └── vite.config.js      # Vite configuration
├── forecasting/
│   └── data/               # ML models and data
└── data/                   # Raw datasets
```

## 🎨 Screenshots

*Add screenshots of your application here*

## 📊 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | API status |
| `/api/predictions` | GET | Get sales predictions |
| `/api/summary` | GET | Get summary statistics |
| `/api/clean-data` | GET | Get cleaned dataset (1000 rows) |
| `/images/metric.png` | GET | Get model metrics image |

## 🚢 Deployment

See [GIT_DEPLOYMENT_GUIDE.md](GIT_DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

**Recommended:** Deploy backend on Render and frontend on Vercel for free!

## 👨‍💻 Developer

**Ntokozo Ntshangase**
- 🌐 [Portfolio](https://ntshportfolio.lovable.app/)
- 💼 [LinkedIn](https://www.linkedin.com/in/ntokozo-ntshangase-8605672a0/)
- 🐙 [GitHub](https://github.com/tkntsh)
- 📧 [Email](mailto:ntokntshangase@gmail.com)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Dataset: Kaggle Walmart Recruiting - Store Sales Forecasting
- Icons: React Icons
- Charts: Chart.js
- Fonts: Google Fonts (Inter, Outfit)

---

Made with ❤️ by Ntokozo Ntshangase
