// Callback.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      console.log('Authorization code:', code); // Log the authorization code

      // Exchange the authorization code for an access token
      fetch('https://auth.riotgames.com/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: 'https://jsakmad.github.io/Valorant-Analyzer',
          client_id: process.env.REACT_APP_CLIENT_ID,
          client_secret: process.env.REACT_APP_CLIENT_SECRET // Ensure you have this in your .env file
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Token response:', data); // Log the response
        if (data.access_token) {
          localStorage.setItem('riot_token', data.access_token);
          console.log('Token stored in localStorage:', data.access_token); // Log the stored token
          navigate('/');
        } else {
          console.error('No access token found in response');
        }
      })
      .catch(error => {
        console.error('Error fetching the token:', error);
      });
    } else {
      console.error('No authorization code found in URL');
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default Callback;
