
import WelcomePage from '../pages/WelcomePage/WelcomePage.jsx';

const App = () => {
  return (
    <>
      <WelcomePage />
    </>
  );
};
export default App;
// App.jsx
import React from 'react';
import Loader from 'components/Loader/Loader.jsx'; // Adjust the path if necessary

const App = () => {
  return (
    <div>
      <h1>Water Tracker</h1>
      <Loader />
    </div>
  );
};

export default App;

