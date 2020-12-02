import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Login from '../../components/Login/Login';
import QuestionPrompt from '../../components/QuestionPrompt/QuestionPrompt';
import Tile from '../../components/Tile/Tile';
import Wrapper from '../../components/Wrapper/Wrapper';

const Home = () => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('authToken')) setUser(true);
  }, []);

  return (
    <div>
      <Header />

      <Wrapper>
        <Login setUser={setUser} user={user} />
        {user && (
          <>
            <QuestionPrompt />
          </>
        )}
      </Wrapper>
    </div>
  );
};

export default Home;
