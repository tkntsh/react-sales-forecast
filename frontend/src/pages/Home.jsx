// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import SalesChart from '../components/SalesChart';
import MetricsCard from '../components/MetricsCard';
import { API_URL } from '../config';

      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-lg">
        <div className="glass-card" style={{ background: 'hsla(0, 85%, 60%, 0.1)', borderColor: 'var(--color-danger)' }}>
          <h3 style={{ color: 'var(--color-danger)' }}>⚠️ Error Loading Data</h3>
          <p>{error}</p>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
            Make sure the backend server is running
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-lg fade-in">
      {/* Header Section */}
      <div className="mb-xl" style={{ textAlign: 'center' }}>
        <h1 className="text-gradient mb-sm">
          Walmart Store Sales Forecasting Dashboard
        </h1>
        <p className="lead">
          Predictive analytics using Random Forest, ARIMA, and Exponential Smoothing
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-4 mb-xl">
        <MetricsCard
          icon="🏪"
          title="Total Stores"
          value={summary.total_stores || '-'}
          color="primary"
        />
        <MetricsCard
          icon="💰"
          title="Avg Weekly Sales"
          value={summary.avg_weekly_sales ? `$${summary.avg_weekly_sales.toLocaleString()}` : '-'}
          color="success"
        />
        <MetricsCard
          icon="📈"
          title="Max Sale"
          value={summary.max_sales ? `$${Math.round(summary.max_sales).toLocaleString()}` : '-'}
          color="accent"
        />
        <MetricsCard
          icon="🎉"
          title="Holiday Weeks"
          value={summary.holiday_weeks || '-'}
          color="primary"
        />
      </div>

      {/* Model Metrics Image */}
      <div className="glass-card mb-xl" style={{ textAlign: 'center' }}>
        <h3 className="mb-md">📊 Model Performance Metrics</h3>
        <img
          src={`${API_URL}/images/metric.png`}
          alt="Model Metrics"
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-lg)'
          }}
        />
      </div>

      {/* Sales Forecast Chart */}
      <div className="chart-container">
        {predictions.length > 0 ? (
          <SalesChart data={predictions} />
        ) : (
          <div className="text-center py-lg">
            <p style={{ color: 'var(--color-text-muted)' }}>No predictions available.</p>
          </div>
        )}
      </div>

      {/* Additional Info */}
      <div className="grid grid-cols-2 mt-lg">
        <div className="glass-card">
          <h4 className="mb-sm">📅 Data Coverage</h4>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            <strong>{summary.total_weeks || '-'}</strong> weeks of historical data analyzed
          </p>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
            Spanning multiple years of Walmart store sales across different departments and locations.
          </p>
        </div>
        <div className="glass-card">
          <h4 className="mb-sm">🤖 Model Ensemble</h4>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Combining <strong>3 ML models</strong> for robust predictions
          </p>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
            Random Forest for feature importance, ARIMA for time series, and Exponential Smoothing for trends.
          </p>
        </div>
      </div>
    </div>
  );
}