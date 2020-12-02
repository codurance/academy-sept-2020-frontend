import React, { Fragment, useEffect } from 'react';
import { useGoogleLogin } from 'react-google-login';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import './styles.scss';

const googleOAuthId = process.env.REACT_APP_GOOGLE_OAUTH_ID;

function Login({ setUser, user }) {
  const onSuccess = (res) => {
    localStorage.setItem('authToken', res.tokenId);
    localStorage.setItem('email', res.profileObj.email);
    setUser(true);
  };
  const onFailure = (res) => {
    console.log(res);
    setUser(false);
  };
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: googleOAuthId,
    isSignedIn: false,
    accessType: 'offline',
  });

  return (
    <>
      {!user && (
        <div className={'login_wrapper'}>
          <Button callback={signIn} label={'Sign In'} variant={'big'} />
        </div>
      )}
    </>
  );
}
export default Login;

Login.propTypes = {
  user: PropTypes.bool,
  setUser: PropTypes.func,
};
