// App.js
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Use HashRouter here
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Test from './components/Test';
import Roster from './components/Roster';
import Stats from './components/Stats';
import PrivacyPolicy from './components/Privacy-Policy';
import ToS from './components/ToS';
import MatchHistory from './components/MatchHistory';
import Callback from './components/Callback';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessCode = localStorage.getItem('riot_access_code');
    if (accessCode) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('riot_access_code');
    setIsLoggedIn(false);
  };

  return (
    <Router basename="/Valorant-Analyzer">
      <div>
        <Header isLoggedIn={isLoggedIn} onSignOut={handleSignOut} />
        <Routes>
          <Route exact path="/" element={<Content />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/test" element={<Test />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/matchhistory" element={<MatchHistory />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/tos" element={<ToS />} />
          <Route path="/callback" element={<Callback />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
