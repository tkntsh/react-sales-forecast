// src/components/MetricsCard.jsx
import PropTypes from 'prop-types';

export default function MetricsCard({ icon, title, value, color = 'primary' }) {
  return (
    <div className="metrics-card fade-in">
      {icon && <div className="metrics-card-icon">{icon}</div>}
      <div className="metrics-card-title">{title}</div>
      <div className="metrics-card-value" style={{ 
        background: `var(--gradient-${color})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        {value}
      </div>
    </div>
  );
}

MetricsCard.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  color: PropTypes.oneOf(['primary', 'accent', 'success'])
};
