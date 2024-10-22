import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      console.log('Authorization code:', code);

      // Send the authorization code to the Flask backend to exchange for tokens
      fetch(`${process.env.REACT_APP_API_URL}/exchange_code`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: code,
          redirect_uri: 'https://jsakmad.github.io/Valorant-Analyzer/callback',  // Ensure redirect_uri matches
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.access_token) {
          localStorage.setItem('riot_token', data.access_token);  // Store the token in localStorage
          navigate('/');  // Redirect to the homepage after successful login
        } else {
          console.error('Token exchange failed:', data);
        }
      })
      .catch((error) => {
        console.error('Error during token exchange:', error);
      });
    } else {
      console.error('No authorization code found in URL');
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default Callback;
