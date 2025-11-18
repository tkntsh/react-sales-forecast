// src/pages/Data.jsx
import { useEffect, useState } from 'react';
import { API_URL } from '../config';

export default function Data() {
  const [data, setData] = useState([]);
    )
  );

  // Pagination
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + rowsPerPage);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-lg">
        <div className="glass-card" style={{ background: 'hsla(0, 85%, 60%, 0.1)', borderColor: 'var(--color-danger)' }}>
          <h3 style={{ color: 'var(--color-danger)' }}>⚠️ Error Loading Data</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-lg fade-in">
      <div className="mb-lg">
        <h1 className="text-gradient mb-sm">📊 Dataset Overview</h1>
        <p className="lead">
          Sample of cleaned and merged Walmart sales data ({data.length.toLocaleString()} rows shown)
        </p>
      </div>

      {/* Search Bar */}
      <div className="glass-card mb-md">
        <input
          type="text"
          placeholder="🔍 Search data..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          style={{
            width: '100%',
            padding: 'var(--spacing-sm) var(--spacing-md)',
            background: 'var(--color-bg-tertiary)',
            border: '1px solid var(--glass-border)',
            borderRadius: 'var(--radius-md)',
            color: 'var(--color-text-primary)',
            fontSize: 'var(--font-size-base)',
            outline: 'none',
            transition: 'all var(--transition-base)'
          }}
          onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
        />
        <p style={{ marginTop: 'var(--spacing-sm)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
          Showing {filteredData.length.toLocaleString()} of {data.length.toLocaleString()} rows
        </p>
      </div>

      {/* Data Table */}
      <div className="table-container mb-md">
        <div style={{ overflowX: 'auto' }}>
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Store</th>
                <th>Dept</th>
                <th>Weekly Sales</th>
                <th>Temperature</th>
                <th>Fuel Price</th>
                <th>Unemployment</th>
                <th>Type</th>
                <th>IsHoliday</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((row, i) => (
                <tr key={i}>
                  <td>{row.Date}</td>
                  <td>{row.Store}</td>
                  <td>{row.Dept}</td>
                  <td style={{ color: 'var(--color-success)', fontWeight: '600' }}>
                    ${row.Weekly_Sales?.toFixed(2)}
                  </td>
                  <td>{row.Temperature?.toFixed(1)}°F</td>
                  <td>${row.Fuel_Price?.toFixed(2)}</td>
                  <td>{row.Unemployment?.toFixed(2)}%</td>
                  <td>
                    <span style={{
                      padding: '4px 8px',
                      background: 'var(--glass-bg)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: 'var(--font-size-xs)',
                      fontWeight: '600'
                    }}>
                      {row.Type}
                    </span>
                  </td>
                  <td>
                    {row.IsHoliday ? (
                      <span style={{ color: 'var(--color-accent)' }}>🎉 Yes</span>
                    ) : (
                      <span style={{ color: 'var(--color-text-muted)' }}>No</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button
          className="btn btn-secondary"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          style={{ opacity: currentPage === 1 ? 0.5 : 1, cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
        >
          ← Previous
        </button>
        <span style={{ color: 'var(--color-text-secondary)' }}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-secondary"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          style={{ opacity: currentPage === totalPages ? 0.5 : 1, cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}