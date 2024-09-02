// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'; // Adjust the path if necessary
import './index.css'; // Optional: Include any global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
