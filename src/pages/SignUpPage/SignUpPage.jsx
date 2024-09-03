// pages/SignUpPage.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../redux/auth/operations';
import AuthForm from '../../components/AuthForm/AuthForm';
import css from './SignUpPage.module.css';
import { Section } from '../../components/Section/Section';
import { Container } from '../../components/Container/Container';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = (values, { setSubmitting }) => {
    const { repeatPassword, ...signupData } = values;

    dispatch(registerUser(signupData)).then((result) => {
      if (registerUser.fulfilled.match(result)) {
        navigate('/signin');
      }
      setSubmitting(false);
    });
  };

  return (
    <Section className={css.sectionForm}>
      <Container className={css.resetPasswordContainer}>
        <div className={css.titleFormThumb}>
          <h2 className={css.block_name}>Sign Up</h2>
          <AuthForm type="signup" onSubmit={handleSignUp} />
          <p>
            <a className={css.redirectLink} href="/reset-password">
              Forgot your password?
            </a>
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default SignUpPage;
