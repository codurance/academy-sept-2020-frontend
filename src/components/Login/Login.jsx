import React, { Fragment, useEffect } from 'react';
import { useGoogleLogin } from 'react-google-login';
import Button from '../Button/Button';
import Tile from '../Tile/Tile';
import PropTypes from 'prop-types';
import QuestionPrompt from '../QuestionPrompt/QuestionPrompt';

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
      <Button callback={signIn} label={'Sign In'} variant={'big'} />
      <Tile
        title={'Codurance Academy Path'}
        textArea={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        }
        button={
          <Button
            callback={() => {
              console.log('click tile');
            }}
            label={'Submit'}
            variant={'big'}
          />
        }
      />
      <QuestionPrompt />
    </Fragment>
  );
}
export default Login;

Login.propTypes = {
  onLoggin: PropTypes.func,
};
