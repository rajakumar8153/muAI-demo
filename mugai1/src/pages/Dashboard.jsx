import React, { useState } from 'react';
import StatCard from '../components/StatCard';
import ToggleControl from '../components/ToggleControl';
import AlertBox from '../components/AlertBox';
import Sidebar from '../components/Sidebar';

const mockStats = [
  { title: 'Soil Moisture', value: '35%', icon: '🌱', color: 'green' },
  { title: 'Temperature', value: '27°C', icon: '🌡️', color: 'orange' },
  { title: 'Humidity', value: '60%', icon: '💧', color: 'blue' },
];

const mockAlerts = [
  { type: 'warning', message: 'Soil moisture low: 22%' },
  { type: 'info', message: 'Last updated 3 mins ago' },
];

const Dashboard = () => {
  const [pumpOn, setPumpOn] = useState(false);
  const [fanOn, setFanOn] = useState(false);

  return (
    <div className="dashboard-root">
      <Sidebar />
      <main className="dashboard-main">
        <h2 className="dashboard-welcome">Welcome, Rajakumar 👋</h2>
        <section className="dashboard-stats">
          {mockStats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </section>
        <section className="dashboard-controls">
          <h3>Device Control Panel</h3>
          <ToggleControl label="Water Pump" state={pumpOn} onToggle={() => setPumpOn((v) => !v)} />
          <ToggleControl label="Fan" state={fanOn} onToggle={() => setFanOn((v) => !v)} />
        </section>
        <section className="dashboard-alerts">
          <h3>Alerts & Logs</h3>
          {mockAlerts.map((alert, i) => (
            <AlertBox key={i} {...alert} />
          ))}
        </section>
        <section className="dashboard-charts">
          <h3>Historical Graphs</h3>
          <div className="chart-placeholder">[Chart.js or Recharts Placeholder]</div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
