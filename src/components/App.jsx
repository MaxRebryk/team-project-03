


// components/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUpPage from '../pages/SignUpPage/SignUpPage'; // Adjust the path as necessary
import HomePage from '../pages/HomePage/HomePage'; // Example for HomePage, adjust path if needed

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default App;
