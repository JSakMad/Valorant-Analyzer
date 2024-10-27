// callback.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessCode = urlParams.get('code');

    if (accessCode) {
      // Store access code or token in localStorage (use actual token once it's retrieved in a secure way)
      localStorage.setItem('riot_access_code', accessCode);
      console.log('Access code received:', accessCode);
      navigate('/'); // Redirect to the homepage after storing the token
    } else {
      console.error('No access code found in URL');
    }
  }, [navigate]);

  return (
    <div>
      <h1>Callback Page</h1>
      <p>Processing login, please wait...</p>
    </div>
  );
};

export default Callback;
