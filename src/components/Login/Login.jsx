import React, { Fragment, useEffect, useState } from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import './styles.scss';
import { useGoogleAuth } from './GoogleAuthProvider';

function Login({ setLoggedIn, loggedIn }) {
  const { signIn, isSignedIn, fetchWithRefresh } = useGoogleAuth();

  useEffect(() => {
    console.log('something calls isSignedIn');
    setLoggedIn(isSignedIn);
  }, [isSignedIn]);

  return (
    <>
      {isSignedIn ? null : (
        <div className={'login_wrapper'}>
          <Button callback={signIn} label={'Sign In'} variant={'big'} />
        </div>
      )}
    </>
  );
}

export default Login;

Login.propTypes = {
  loggedIn: PropTypes.boolean,
  setLoggedIn: PropTypes.func,
};
