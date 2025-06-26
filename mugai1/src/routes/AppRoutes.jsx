import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/dashboard" element={<Dashboard />} />
    {/* Temporary: Show all pages for structure demo */}
    <Route
      path="*"
      element={
        <div style={{ padding: 40 }}>
          <h2>All Pages Demo</h2>
          <Home />
          <Login />
          <Signup />
          <Dashboard />
        </div>
      }
    />
  </Routes>
);

export default AppRoutes;
