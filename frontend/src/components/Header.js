// Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in by looking for a token in localStorage
    const token = localStorage.getItem('riot_token');
    console.log('Token in localStorage:', token);  // Log the token for debugging
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const redirectUri = 'https://jsakmad.github.io/Valorant-Analyzer/callback';  // Updated to /callback
    const authUrl = `https://auth.riotgames.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid+offline_access`;
  
    window.location.href = authUrl;
  };  

  const handleLogout = () => {
    // Clear the token from localStorage and update the state
    localStorage.removeItem('riot_token');
    setIsLoggedIn(false);
  };

  return (
    <header>
      <h1>Valorant Analyzer</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/roster">Roster</Link>
        <Link to="/test">Test</Link>
        <Link to="/stats">Stats</Link>
        <Link to="/matchhistory">Match History</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/tos">Terms of Service</Link>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="login-button">Sign Out</button>
        ) : (
          <button onClick={handleLogin} className="login-button">Sign into Riot</button>
        )}
      </nav>
    </header>
  );
};

export default Header;
