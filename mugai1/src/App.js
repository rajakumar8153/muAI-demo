import React from 'react';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header mugai-gradient-bg">
        <Navbar />
        <AppRoutes />
      </header>
    </div>
  );
}

export default App;
