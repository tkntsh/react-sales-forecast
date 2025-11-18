// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <NavLink className="navbar-brand" to="/">
            📊 Walmart Forecast
          </NavLink>
          <div style={{ display: 'flex', gap: 'var(--spacing-xs)' }}>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/data">
              Data
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/developer">
              Developer
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}