import React from 'react';

const StatCard = ({ title, value, icon, color }) => (
  <div className="stat-card" style={{ borderLeft: `6px solid ${color}` }}>
    <div className="stat-icon">{icon}</div>
    <div>
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
    </div>
  </div>
);

export default StatCard;
