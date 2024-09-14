import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter> {/* Wrap your routes in BrowserRouter */}
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
