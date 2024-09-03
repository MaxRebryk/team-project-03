import WelcomePage from '../pages/WelcomePage/WelcomePage.jsx';
// import SignInPage from '../pages/SignInPage/SignInPage.jsx';
import React from 'react';
import Loader from 'components/Loader/Loader.jsx'; // Adjust the path if necessary

const App = () => {
  return (
    <div>
      <h1>Water Tracker</h1>
      <Loader />
      <WelcomePage />
      {/* <SignInPage /> */}
    </div>
  );
};

export default App;
