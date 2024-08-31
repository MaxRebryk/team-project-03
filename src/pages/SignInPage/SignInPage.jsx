// import { useSelector } from 'react-redux';
import LoginForm from 'components/LoginForm/LoginForm';
import React from 'react';
// import { selectIsLoading } from 'redux/auth/selectors';

const SignInPage = () => {
  // const isLoading = useSelector(selectIsLoading);
  return (
    <div>
      <LoginForm />
      {/* {isLoading} */}
    </div>
  );
};

export default SignInPage;
