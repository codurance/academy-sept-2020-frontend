import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Login from '../../components/Login/Login';
import QuestionPrompt from '../../components/QuestionPrompt/QuestionPrompt';
import Wrapper from '../../components/Wrapper/Wrapper';
import {
  GoogleAuthProvider,
  useGoogleAuth,
} from '../../components/Login/GoogleAuthProvider';

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <GoogleAuthProvider>
        <div>
          <Header />
          <Wrapper>
              <Login setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
            {loggedIn && (
              <>
                <QuestionPrompt />
              </>
            )}
          </Wrapper>
        </div>
    </GoogleAuthProvider>
  );
};

export default Home;
