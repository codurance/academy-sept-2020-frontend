import React from 'react';
import Header from '../../components/Header/Header';
import Login from '../../components/Login/Login';
import Wrapper from '../../components/Wrapper/Wrapper';

const Home = () => {
  return (
    <div>
      <Header />
      <Wrapper>
        <Login />
      </Wrapper>
    </div>
  );
};

export default Home;
