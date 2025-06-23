import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header mugai-gradient-bg">
        <h1 className="mugai-title">mugAI</h1>
        <h2 className="mugai-subtitle">IoT-based Smart Irrigation System</h2>
        <p className="mugai-desc">
          Welcome to <span className="mugai-highlight">mugAI</span>, your intelligent solution for efficient crop irrigation.<br />
          Monitor your fields in real-time, optimize water usage, and boost your crop yield with data-driven insights.
        </p>
        <ul className="mugai-features">
          <li>🌱 Real-time soil & climate monitoring</li>
          <li>💧 Automated, eco-friendly irrigation</li>
          <li>📱 Mobile-first dashboard & instant alerts</li>
          <li>🧠 AI-powered analytics for smart farming</li>
        </ul>
        <a
          className="App-link mugai-cta"
          href="#"
        >
          Get Started 🚀
        </a>
      </header>
    </div>
  );
}

export default App;
