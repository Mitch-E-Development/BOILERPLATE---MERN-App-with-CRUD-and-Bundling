import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the createRoot API for React 18+
import App from './App.jsx'; // Import the main App component
import './styles/styles.css'; // Import global CSS styles
import './styles/tailwind.css'; // Import Tailwind CSS for utility-first styling

/**
 * Entry point for the React application.
 * Creates a root element and renders the App component.
 * @function
 * @returns {void}
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * Render the App component inside the root element.
 * Wrapped in React.StrictMode for highlighting potential problems.
 */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
