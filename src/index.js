// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from 'components/App.jsx';
import './index.css';
import 'modern-normalize';
// import { BrowserRouter as Router } from 'react-router-dom';

// // Get the root element
// const rootElement = document.getElementById('root');

// if (rootElement) {
//   // Create a root using ReactDOM.createRoot
//   const root = ReactDOM.createRoot(rootElement);

//   // Render the application
//   root.render(
//     <Router>
//       <App />
//     </Router>
//   );
// } else {
//   console.error('Root element not found');
// }

// =======
// import App from './components/App.jsx'; // Adjust the path if necessary
// import './index.css'; // Optional: Include any global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
