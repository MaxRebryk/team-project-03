import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { register } from 'redux/auth/operations';
import {
  SignUpContainer,
  SightUp,
  ErMsg,
  FormBtnStyled,
  BottleImg,
  StyledBtn,
  StyledField,
  StyledForm,
  StyledLabel,
  GoogleSignInBtn,
} from './RegistrationForm.styled.js';
import sprite from '../../images/sprite.svg';

const initialValues = {
  email: '',
  password: '',
  repeatPassword: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async ({ email, password }, { resetForm }) => {
    dispatch(
      register({
        email,
        password,
      })
    );
    resetForm();
  };

  const handleGoogleSignIn = async (response) => {
    const { credential } = response;

    // Send the ID token to your backend for verification
    // Example:
    const res = await fetch('/api/auth/google-signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idToken: credential }),
    });

    const data = await res.json();

    if (data.success) {
      // Handle successful sign-in
      navigate('/dashboard');
    } else {
      // Handle sign-in error
      console.error('Google Sign-In failed');
    }
  };

  // Use Effect to load the Google API
  React.useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: 'GOOGLE_AUTH_CLIENT_ID',
      callback: handleGoogleSignIn,
    });

    window.google.accounts.id.renderButton(
      document.getElementById('google-sign-in-button'),
      { theme: 'outline', size: 'large' }
    );
  }, []);

  return (
    <SignUpContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, touched, errors }) => (
          <StyledForm>
            <h2>Sign Up</h2>
            <StyledLabel htmlFor="email">Enter your email</StyledLabel>
            <StyledField
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              autoComplete="email"
              error={touched.email && errors.email ? 'true' : 'false'}
            />
            <ErMsg name="email" component="div" />

            <StyledLabel htmlFor="password">
              Enter your password
              <StyledBtn onClick={() => setShowPassword(!showPassword)}>
                <svg>
                  <use
                    href={sprite + (showPassword ? '#eye-show' : '#eye-hide')}
                  ></use>
                </svg>
              </StyledBtn>
            </StyledLabel>
            <StyledField
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="Password"
              error={touched.password && errors.password ? 'true' : 'false'}
              autoComplete="new-password"
            />

            <ErMsg name="password" component="div" />

            <StyledLabel htmlFor="repeatPassword">
              Repeat Password
              <StyledBtn
                onClick={() => setShowRepeatPassword(!showRepeatPassword)}
              >
                <svg>
                  <use
                    href={
                      sprite + (showRepeatPassword ? '#eye-show' : '#eye-hide')
                    }
                  ></use>
                </svg>
              </StyledBtn>
            </StyledLabel>
            <StyledField
              type={showRepeatPassword ? 'text' : 'password'}
              name="repeatPassword"
              id="repeatPassword"
              placeholder="Repeat your password"
              error={
                touched.repeatPassword && errors.repeatPassword
                  ? 'true'
                  : 'false'
              }
              autoComplete="new-password"
            />
            <ErMsg name="repeatPassword" component="div" />

            <FormBtnStyled type="submit" disabled={isSubmitting}>
              Sign Up
            </FormBtnStyled>
            <SightUp onClick={() => navigate('/signin')}>Sign in</SightUp>

            <div id="google-sign-in-button"></div>
          </StyledForm>
        )}
      </Formik>
      <BottleImg />
    </SignUpContainer>
  );
};

export default RegistrationForm;
