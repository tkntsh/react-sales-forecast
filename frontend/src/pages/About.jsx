// src/pages/About.jsx
export default function About() {
  return (
    <div className="container py-lg fade-in">
      <h1 className="text-gradient mb-lg text-center">About This Project</h1>

      <div className="grid grid-cols-2 mb-lg">
        <div className="glass-card">
          <h3 className="mb-md">🎯 Purpose</h3>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            This project forecasts Walmart store sales using historical data from 2010–2012.
            It combines <strong style={{ color: 'var(--color-primary)' }}>Random Forest Regressor</strong>,{' '}
            <strong style={{ color: 'var(--color-primary)' }}>ARIMA</strong>, and{' '}
            <strong style={{ color: 'var(--color-primary)' }}>Exponential Smoothing</strong> to
            generate robust 12-month predictions.
          </p>
        </div>

        <div className="glass-card">
          <h3 className="mb-md">📊 Data Sources</h3>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Kaggle Walmart Recruiting - Store Sales Forecasting Dataset
          </p>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: 'var(--spacing-sm)' }}>
            Historical sales data spanning multiple stores, departments, and external factors like
            temperature, fuel prices, and unemployment rates.
          </p>
        </div>
      </div>

      <div className="glass-card mb-lg">
        <h3 className="mb-md">🛠️ Tech Stack</h3>
        <div className="grid grid-cols-2">
          <div>
            <h5 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>Backend & ML</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: 'var(--spacing-xs)', color: 'var(--color-text-secondary)' }}>
                🐍 <strong>Python</strong>: Pandas, Scikit-learn, Statsmodels, PMDarima
              </li>
              <li style={{ marginBottom: 'var(--spacing-xs)', color: 'var(--color-text-secondary)' }}>
                ⚡ <strong>FastAPI</strong>: RESTful API for data serving
              </li>
            </ul>
          </div>
          <div>
            <h5 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>Frontend</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: 'var(--spacing-xs)', color: 'var(--color-text-secondary)' }}>
                ⚛️ <strong>React</strong>: Component-based UI
              </li>
              <li style={{ marginBottom: 'var(--spacing-xs)', color: 'var(--color-text-secondary)' }}>
                ⚡ <strong>Vite</strong>: Fast build tool
              </li>
              <li style={{ marginBottom: 'var(--spacing-xs)', color: 'var(--color-text-secondary)' }}>
                📊 <strong>Chart.js</strong>: Data visualization
              </li>
              <li style={{ marginBottom: 'var(--spacing-xs)', color: 'var(--color-text-secondary)' }}>
                🎨 <strong>Custom CSS</strong>: Dark mode with glassmorphism
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass-card">
        <h3 className="mb-md">🔄 Model Pipeline</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
          {[
            { num: 1, text: 'Data Cleaning & Merging', icon: '🧹' },
            { num: 2, text: 'Feature Engineering (Holidays, Date Parts)', icon: '⚙️' },
            { num: 3, text: 'Random Forest (70/30 split)', icon: '🌲' },
            { num: 4, text: 'ARIMA + Exponential Smoothing', icon: '📈' },
            { num: 5, text: 'Ensemble Averaging', icon: '🎯' }
          ].map(step => (
            <div
              key={step.num}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-md)',
                padding: 'var(--spacing-sm)',
                background: 'var(--color-bg-tertiary)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--glass-border)',
                transition: 'all var(--transition-base)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(8px)';
                e.currentTarget.style.borderColor = 'var(--color-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--gradient-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                fontSize: 'var(--font-size-lg)'
              }}>
                {step.num}
              </div>
              <span style={{ fontSize: 'var(--font-size-xl)' }}>{step.icon}</span>
              <span style={{ color: 'var(--color-text-secondary)', fontWeight: '500' }}>{step.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}