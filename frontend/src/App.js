import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
  return (
    <Router basename="/Valorant-Analyzer">
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Content />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/test" element={<Test />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/matchhistory" element={<MatchHistory />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/tos" element={<ToS />} />
          <Route path="/callback" element={<Callback />} /> {/* Add the callback route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
