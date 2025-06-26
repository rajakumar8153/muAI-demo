import React from 'react';

const ToggleControl = ({ label, state, onToggle }) => (
  <button className={`toggle-btn ${state ? 'on' : 'off'}`} onClick={onToggle}>
    {label}: {state ? 'ON' : 'OFF'}
  </button>
);

export default ToggleControl;
