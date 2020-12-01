import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Login from '../../components/Login/Login';
import QuestionPrompt from '../../components/QuestionPrompt/QuestionPrompt';
import Tile from '../../components/Tile/Tile';
import Wrapper from '../../components/Wrapper/Wrapper';

const Home = () => {
  const [user, setUser] = useState(false);

  const handleLoggin = (loggedUser) => {
    setUser(true);
  };

  return (
    <div>
      <Header />

      <Wrapper>
        {user ? (
          <>
            <QuestionPrompt />

            <Tile
              title={'Codurance Academy Path'}
              textArea={
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
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
          </>
        ) : (
          <Login onLoggin={handleLoggin} />
        )}
      </Wrapper>
    </div>
  );
};

export default Home;
