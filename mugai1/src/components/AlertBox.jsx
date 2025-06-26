import React from 'react';

const AlertBox = ({ type, message }) => (
  <div className={`alert-box alert-${type}`}>{message}</div>
);

export default AlertBox;
