import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; // Import routing components from react-router-dom
import HomePage from './pages/HomePage';

/**
 * Main App component that sets up routing for the application.
 * @component
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <BrowserRouter> {/* Provides the routing context for the application */}
      <div className="container mx-auto p-4">
        {/* Container for styling and layout */}
        <Routes>
          {/* Define application routes */}
          <Route path="/" element={<HomePage />} />
          {/* Route for the homepage */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
