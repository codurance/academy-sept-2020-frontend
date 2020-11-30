import React from 'react';
import Header from '../../components/Header/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <h1>Im an H1</h1>
      <h2>Im an H2</h2>
      <h3>Im an H3</h3>
      <p>This is a paragraph</p>
      <a href="asdf">Im an anchor</a>
      <p className="cta">Im a cta element</p>
    </div>
  );
};

export default Home;
