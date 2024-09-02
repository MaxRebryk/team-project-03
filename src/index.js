// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from 'components/App.jsx';
import './index.css';
import 'modern-normalize';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

// Get the root element
const rootElement = document.getElementById('root');

if (rootElement) {
  // Create a root using ReactDOM.createRoot
  const root = ReactDOM.createRoot(rootElement);

  // Render the application
  root.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
} else {
  console.error('Root element not found');
}
