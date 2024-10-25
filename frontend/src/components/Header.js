import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, onSignOut }) => {
  const baseUrl = process.env.REACT_APP_API_URL;  // No trailing slash

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/roster">Roster</Link></li>
          <li><Link to="/test">Test</Link></li>
          <li><Link to="/stats">Stats</Link></li>
          <li><Link to="/matchhistory">Match History</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/tos">Terms of Service</Link></li>
          {isLoggedIn ? (
            <li><button onClick={onSignOut}>Sign Out</button></li>
          ) : (
            <li><a href={`${baseUrl}/login`}>Sign In</a></li>  // Correct login URL
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
