import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('access_token');  // Capture the access_token from the URL

    if (accessToken) {
      console.log('Access token received:', accessToken);
      localStorage.setItem('riot_token', accessToken);  // Store the token in localStorage
      navigate('/');  // Redirect to the homepage after storing the token
    } else {
      console.error('No access token found in URL');
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
