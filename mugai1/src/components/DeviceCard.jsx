import React from 'react';

const DeviceCard = ({ device }) => (
  <div className="device-card">
    <h3>{device.name}</h3>
    <p>Status: {device.status}</p>
  </div>
);

export default DeviceCard;
