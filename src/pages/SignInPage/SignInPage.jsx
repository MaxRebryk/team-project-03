import { useSelector } from 'react-redux';
import SignInForm from '../../components/SignInForm';

const SignInPage = () => {
  const isLoading = useSelector;
  return (
    <div>
      <SignInForm />
    </div>
  );
};
