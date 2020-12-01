import React from 'react';
import './styles.scss';
import { useGoogleLogin } from 'react-google-login';

const googleOAuthId = process.env.REACT_APP_GOOGLE_OAUTH_ID;

function Login() {
  console.log(googleOAuthId);
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

  return (
    <button onClick={signIn} className="button button--big">
      <span className="buttonText">Sign In</span>
    </button>
  );
}
export default Login;
