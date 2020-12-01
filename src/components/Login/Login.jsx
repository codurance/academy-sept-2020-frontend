import React, { Fragment, useEffect } from 'react';
import { useGoogleLogin } from 'react-google-login';
import Button from '../Button/Button';
import Tile from '../Tile/Tile';
import PropTypes from 'prop-types';

const googleOAuthId = process.env.REACT_APP_GOOGLE_OAUTH_ID;

function Login({ onLoggin }) {
  const onSuccess = (res) => {
    console.log(res.profileObj);
    localStorage.setItem('authToken', res.googleId);
    onLoggin(res);
  };
  const onFailure = (res) => {
    console.log(res);
  };
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: googleOAuthId,
    isSignedIn: false,
    accessType: 'offline',
  });

  return (
    <Fragment>
      <Tile />
      {/*<Button callback={signIn} label={'Sign In'} variant={'big'} />*/}
    </Fragment>
  );
}
export default Login;

Login.propTypes = {
  onLoggin: PropTypes.func,
};
