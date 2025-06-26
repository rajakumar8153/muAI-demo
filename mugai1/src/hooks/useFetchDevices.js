import { useEffect, useState } from 'react';
import { fetchDevices } from '../services/deviceService';

const useFetchDevices = () => {
  const [devices, setDevices] = useState([]);
  useEffect(() => {
    fetchDevices().then(setDevices);
  }, []);
  return devices;
};

export default useFetchDevices;
