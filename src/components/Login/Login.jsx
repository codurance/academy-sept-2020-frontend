import React, { Fragment } from 'react';
import { useGoogleLogin } from 'react-google-login';
import Button from '../Button/Button';

const googleOAuthId = process.env.REACT_APP_GOOGLE_OAUTH_ID;

function Login() {
  const onSuccess = (res) => {
    console.log(res.profileObj);
    localStorage.setItem('authToken', res.googleId);
  };
  const onFailure = (res) => {
    console.log(res);
  };
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: googleOAuthId,
    isSignedIn: true,
    accessType: 'offline',
  });

  return <Button callback={signIn} label={'Sign In'} variant={'big'} />;
}
export default Login;
