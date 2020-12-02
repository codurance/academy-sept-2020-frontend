import React, { Fragment, useEffect } from 'react';
import { useGoogleLogin } from 'react-use-googlelogin';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import './styles.scss';
import { refreshTokenSetup } from '../../utils/refreshToken';

const googleOAuthId = process.env.REACT_APP_GOOGLE_OAUTH_ID;

function Login({ setLoggedIn, loggedIn }) {
  // const onSuccess = (res) => {
  //   sessionStorage.setItem('authToken', res.tokenId);
  //   sessionStorage.setItem('email', res.profileObj.email);
  //   refreshTokenSetup(res);
  //   sessionStorage.setItem('res', JSON.stringify(res));
  //   setUser(true);
  // };
  // const onFailure = () => {
  //   sessionStorage.clear();
  //   setUser(false);
  // };

  const { signIn, refreshUser, isSignedIn, isInitialized } = useGoogleLogin({
    clientId: googleOAuthId,
      grantOfflineAccess: true
  });

  const handleSignIn = async () => {
    try {
      const googleUser = await signIn();
      setLoggedIn(true);
      localStorage.setItem('authToken', googleUser.tokenId);
      localStorage.setItem('email', googleUser.profileObj.email);
      localStorage.setItem('res', JSON.stringify(googleUser));
    } catch (error) {
      setLoggedIn(false);
    }
  };

  useEffect(() => {
    setLoggedIn(isSignedIn);
      // JSON.parse(localStorage.getItem('res'));
      refreshUser();
  }, [isSignedIn]);

  return (
    <>
      {isInitialized && (
        <>
          {isSignedIn ? null : (
            <div className={'login_wrapper'}>
              <Button
                callback={handleSignIn}
                label={'Sign In'}
                variant={'big'}
              />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Login;

Login.propTypes = {
  loggedIn: PropTypes.bool,
  setLoggedIn: PropTypes.func,
};
