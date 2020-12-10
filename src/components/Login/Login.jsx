import React, { Fragment, useEffect, useState } from 'react';
import Button from '../Button/Button';
import './styles.scss';
import { useGoogleAuth } from './GoogleAuthProvider';
import Header from '../Header/Header';
import Wrapper from '../Wrapper/Wrapper';

function Login() {
  const { signIn } = useGoogleAuth();
  return (
    <Fragment>
      <Header />
      <Wrapper>
        <div className={'login_wrapper'}>
          <Button callback={signIn} label={'Sign In'} variant={'big'} />
        </div>
      </Wrapper>
    </Fragment>
  );
}

export default Login;
