import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { UserContext } from '../../contexts/user.context';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    await signOutUser();
  };
  return (
    <Fragment>
      {/* det som är här kommer att visas på alla sidor */}
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>

        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              Sign in
            </Link>
          )}
        </div>
      </div>
      {/* det som är här kommer ändras på olika sidor */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
