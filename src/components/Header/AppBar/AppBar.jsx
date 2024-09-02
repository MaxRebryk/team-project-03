import { NavLink, useNavigate } from 'react-router-dom';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import css from './AppBar.module.css';
import Logo from './Logo.png';
export default function AppBar() {
  const navigate = useNavigate();
  const handleSignInClick = () => {
    navigate('/signin');
  };
  return (
    <div className={css.wrap}>
      <NavLink to="/">
        {/* Welcom Page */}
        <img src={Logo} width="102" height="48" alt="Logo" />
      </NavLink>
      <div className={css['user-container']}>
        <button
          type="button"
          className={css.button}
          onClick={handleSignInClick}
        >
          Sign in
          <HiOutlineUserCircle className={css.icon} />
        </button>
      </div>
    </div>
  );
}
