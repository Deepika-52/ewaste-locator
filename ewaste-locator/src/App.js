import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LocatorPage from './pages/LocatorPage';
import InfoPage from './pages/InfoPage';

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-green-700 text-white p-4 flex justify-around">
        <Link to="/">Home</Link>
        <Link to="/locator">Find Centers</Link>
        <Link to="/info">E-Waste Info</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/locator" element={<LocatorPage />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;