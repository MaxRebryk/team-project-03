import AuthNav from './AuthNav/AuthNav';
import AppBar from './AppBar/AppBar';
import css from './Header.module.css';
// import { selectIsLoggedIn } from '..//../redux/auth/selectors';

export function Header() {
  //============================================
  return (
    <header className={css.header}>
      <div className={css.container}>
        <div className={css['position']}>
          {/* <AppBar /> */}
          <AuthNav />
        </div>
      </div>
    </header>
  );
}

// {/* {isLoggedIn ? <AppBar /> : <AuthNav />}

/* <svg className={css.icon} width="24" height="24">
                <use href="../../../public/icons/sprite.svg#user"></use>
              </svg> */
