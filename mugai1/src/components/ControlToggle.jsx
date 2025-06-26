import React from 'react';

const ControlToggle = ({ isOn, onToggle }) => (
  <button onClick={onToggle} className={isOn ? 'toggle-on' : 'toggle-off'}>
    {isOn ? 'Turn Off' : 'Turn On'}
  </button>
);

export default ControlToggle;
