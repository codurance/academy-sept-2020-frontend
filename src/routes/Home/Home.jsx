import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Login from '../../components/Login/Login';
import QuestionPrompt from '../../components/QuestionPrompt/QuestionPrompt';
import Wrapper from '../../components/Wrapper/Wrapper';
import { useGoogleAuth } from '../../components/Login/GoogleAuthProvider';

const Home = () => {
  const { isSignedIn } = useGoogleAuth();
  return (
    <div>
      <Header />
      <Wrapper>
        <Login />
        {isSignedIn && (
          <>
            <QuestionPrompt />
          </>
        )}
      </Wrapper>
    </div>
  );
};

export default Home;
