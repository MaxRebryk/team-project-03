// App.jsx
import React from 'react';
import Loader from 'components/Loader/Loader.jsx'; // Adjust the path if necessary
import { Header } from './Header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <h1>Water Tracker</h1>
      {/* <Loader /> */}
    </div>
  );
};

export default App;
