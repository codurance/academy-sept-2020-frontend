import React, { Fragment, useEffect, useState } from 'react';
import Button from '../Button/Button';
import './styles.scss';
import { useGoogleAuth } from './GoogleAuthProvider';

function Login() {
  const { signIn, isSignedIn } = useGoogleAuth();

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
