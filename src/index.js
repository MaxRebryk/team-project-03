// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App'; // Adjust the path as necessary
import './index.css';
import 'modern-normalize';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <Router>
      <App />
    </Router>
  );
} else {
  console.error('Root element not found');
}
