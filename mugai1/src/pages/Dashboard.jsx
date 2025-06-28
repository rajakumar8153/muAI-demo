import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [soilMoisture, setSoilMoisture] = useState(35);
  const [temperature, setTemperature] = useState(27);
  const [humidity, setHumidity] = useState(60);
  const [waterPump, setWaterPump] = useState(false);
  const [fan, setFan] = useState(false);
  const [alerts] = useState([{ time: "10:30 AM", message: "Temp reached 30°C - Fan ON" }]);

  const toggleWaterPump = () => setWaterPump(!waterPump);
  const toggleFan = () => setFan(!fan);

  return (
    <div className="container">
      <main className="dashboard-grid">
        {/* Sensor Data */}
        <div className="card">
          <h3 className="card-title">Sensor Data</h3>
          <div className="sensor-grid">
            <div className="sensor-item green">
              <p className="sensor-label">Soil Moisture</p>
              <p className="sensor-value">{soilMoisture}%</p>
            </div>
            <div className="sensor-item orange">
              <p className="sensor-label">Temperature</p>
              <p className="sensor-value">{temperature}°C</p>
            </div>
            <div className="sensor-item blue">
              <p className="sensor-label">Humidity</p>
              <p className="sensor-value">{humidity}%</p>
            </div>
          </div>
        </div>

        {/* Weekly Soil Moisture Trend */}
        <div className="card">
          <h3 className="card-title">Weekly Soil Moisture Trend</h3>
          <div className="chart-container">
            <svg className="chart">
              <polyline
                fill="none"
                stroke="green"
                strokeWidth="2"
                points="0,150 50,100 100,120 150,90 200,110 250,130 300,100"
              />
              <line x1="0" y1="150" x2="300" y2="150" stroke="gray" strokeWidth="1" />
              <text x="0" y="10" fill="gray">60</text>
              <text x="0" y="70" fill="gray">45</text>
              <text x="0" y="130" fill="gray">30</text>
              <text x="0" y="190" fill="gray">15</text>
              <text x="0" y="250" fill="gray">0</text>
              <text x="50" y="160" fill="gray">Tue</text>
              <text x="150" y="160" fill="gray">Thu</text>
              <text x="250" y="160" fill="gray">Sun</text>
            </svg>
          </div>
        </div>

        {/* Control Panel */}
        <div className="card">
          <h3 className="card-title">Control Panel</h3>
          <button
            onClick={toggleWaterPump}
            className={`control-btn ${waterPump ? 'active' : ''}`}
          >
            WATER PUMP: {waterPump ? 'ON' : 'OFF'}
          </button>
          <button
            onClick={toggleFan}
            className={`control-btn ${fan ? 'active' : ''}`}
          >
            FAN: {fan ? 'ON' : 'OFF'}
          </button>
        </div>

        {/* Smart Recommendation */}
        <div className="card full-width">
          <h3 className="card-title">Smart Recommendation</h3>
          <p className="recommendation-text">Moisture is low. Recommended: Turn ON irrigation for 10 minutes.</p>
        </div>

        {/* Logs & Alerts */}
        <div className="card full-width">
          <h3 className="card-title">Logs & Alerts</h3>
          {alerts.map((alert, index) => (
            <div key={index} className="alert-item">
              <span className="alert-icon">🔔</span>
              <p>{`[${alert.time}] ${alert.message}`}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;