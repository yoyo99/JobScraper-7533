import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Search from './pages/Search';
import Dashboard from './pages/Dashboard';
import CoverLetter from './pages/CoverLetter';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cover-letter" element={<CoverLetter />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;