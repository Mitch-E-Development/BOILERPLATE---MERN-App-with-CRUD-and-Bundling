import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change here
import App from './App.jsx'
import './styles/styles.css'; // Update this path to your actual CSS file

// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
