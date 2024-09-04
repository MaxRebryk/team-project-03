import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from 'components/LoginForm/LoginForm.jsx';
import { selectIsLoading } from '../../redux/auth/auth.selectors';
import style from './SignInPage.module.css';
import Loader from 'components/Loader/Loader';

const SignInPage = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={style.background}>
      <LoginForm />
      {isLoading && <Loader />}
    </div>
  );
};

export default SignInPage;

