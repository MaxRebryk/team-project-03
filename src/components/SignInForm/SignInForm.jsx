import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { signin } from '../../redux/auth/operatoins';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import style from './SignInForm.module.css';
import * as Yup from 'yup';
import { useId, useState } from 'react';

const UserSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, 'Email must be 3 symbols minimum')
    .max(30, 'Email must be 30 symbols maximum')
    .email('Invalid email address')
    .required('Email is required!'),
  password: Yup.string()
    .min(8, 'Password must be 8 symbols minimum')
    .max(64, 'Password must be 64 symbols maximum')
    .required('Password is required!'),
});

export default function SignInForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailFindId = useId();
  const pswFindId = useId();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(signin(values)).unwrap();
      navigate('/home');
    } catch (error) {
      toast.error('Login failed. Please check your credentials and try again.');
    }
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={UserSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={style.form} autoComplete="off">
            <h2 className={style.title}>Sign In</h2>
            <label className={style.label} htmlFor={emailFindId}>
              Email
              <Field
                id={emailFindId}
                className={style.form_input}
                type="email"
                name="email"
              />
              <ErrorMessage
                className={style.error}
                name="email"
                component="div"
              />
            </label>
            <label className={style.label} htmlFor={pswFindId}>
              Password
              <div className={style.passwordWrapper}>
                <Field
                  id={pswFindId}
                  className={style.form_input}
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                />
                <span
                  onClick={togglePasswordVisibility}
                  className={style.togglePassword}
                >
                  <svg className={style.icon}>
                    <use
                      href={`../../../public/icons/sprite.svg#${
                        showPassword ? 'eye-slash' : 'eye'
                      }`}
                    />
                  </svg>
                </span>
              </div>
              <ErrorMessage
                className={style.error}
                name="password"
                component="div"
              />
            </label>
            <button className={style.btn} type="submit" disabled={isSubmitting}>
              Sign In
            </button>
          </Form>
        )}
      </Formik>
      <div className={style.navigation}>
        <p>
          Don't have an account?{' '}
          <a href="/signup" className={style.link}>
            Sign Up
          </a>
        </p>
        <p>
          <a href="/forgot-password" className={style.link}>
            Forgot your password?
          </a>
        </p>
      </div>
    </div>
  );
}
