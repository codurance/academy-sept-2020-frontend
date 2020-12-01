import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Login from '../../components/Login/Login';
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
        {user ? <h1>Logged In </h1> : <Login onLoggin={handleLoggin} />}
      </Wrapper>
    </div>
  );
};

export default Home;
