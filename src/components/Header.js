// Header.js
// Header of the website found at the top of every page that contains the site's title, navigation links, and a button to sign into Riot's API.
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const handleLogin = () => {
    const clientId = 'your-mock-client-id';
    const redirectUri = 'http://localhost:3000/callback';
    const authUrl = `https://auth.riotgames.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid+offline_access`;

    window.location.href = authUrl;
  };

  return (
    <header>
      <h1>Valorant Analyzer</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/roster">Roster</Link>
        <Link to="/test">Test</Link>
        <Link to="/stats">Stats</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/tos">Terms of Service</Link>
        <button onClick={handleLogin} className="login-button">Sign into Riot</button>
      </nav>
    </header>
  );
};

export default Header;
