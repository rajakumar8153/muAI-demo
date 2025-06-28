import React, { useState } from 'react';
import './Login.css';
import logo from '../assets/mugai_logo-removebg-preview.png'

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for Firebase authentication logic
    if (email && password) {
      setError('');
      if (onLogin) onLogin();
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-root">
      <div className="login-illustration">
        <img
           src={logo}
          alt="Login Illustration"
        />

        <p>Smart farming made simple.<br />Monitor and control your fields, anytime, anywhere.</p>
      </div>
      <div className="login-form-panel">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-logo">Mugai</div>
          <h3>Sign in to your account</h3>
          <label>
            Email
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </label>
          <div className="login-form-links">
            <a href="#">Forgot password?</a>
          </div>
          {error && <div className="login-error">{error}</div>}
          <button type="submit" className="login-btn">Sign in</button>
          <div className="login-divider"><span>or</span></div>
          <button type="button" className="login-google-btn">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" />
            Sign in with Google
          </button>
          <div className="login-signup-link">
            New to mugAI? <a href="/signup">Create Account</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;