import React from 'react';
import ReactLogo from '../../assets/icons/codurance-logo.svg';
import './styles.scss';

const Header = () => {
  return (
    <div className={'header'}>
      <img className={'header__logo'} src={ReactLogo} alt="React Logo" />
      <h1>All Aboard</h1>
    </div>
  );
};

export default Header;
