import React, { useState } from 'react';
import './Signup.css';

function Signup({ onSignup }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for Firebase signup logic
    if (!email || !password || !name) {
      setError('Please fill all fields');
    } else if (password !== confirm) {
      setError('Passwords do not match');
    } else {
      setError('');
      if (onSignup) onSignup();
    }
  };

  return (
    <div className="signup-root">
      <div className="signup-illustration">
        <img
          src= "https://drive.google.com/uc?export=view&id=1vFSneDH7jJ0QzM1nCWrTNDSdvYICj-ob"
          alt="Signup Illustration"
        />
        <h2>Join mugAI</h2>
        <p>
          Create your account and start<br />
          smart farming with real-time insights.
        </p>
      </div>
      <div className="signup-form-panel">
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="signup-logo">mug<span>AI</span></div>
          <h3>Create your account</h3>
          <label>
            Name
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </label>
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
              placeholder="Create a password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </label>
          <label>
            Confirm Password
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              required
            />
          </label>
          {error && <div className="signup-error">{error}</div>}
          <button type="submit" className="signup-btn">Sign up</button>
         
          <div className="signup-divider"><span>or</span></div>
          <button type="button" className="signup-google-btn">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" />
            Sign up with Google
          </button>
          <div className="signup-login-link">
            Already have an account? <a href="/login">Sign in</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;