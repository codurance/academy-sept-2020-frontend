import React from 'react';
import ReactLogo from '../../assets/icons/codurance-logo.svg';
import './styles.scss';

const Header = () => {
  return (
    <nav className={'header'}>
      <div className={'header__content'}>
        <img className={'header__logo'} src={ReactLogo} alt="Codurance Logo" />
        <h1>All Aboard</h1>
      </div>
    </nav>
  );
};

export default Header;
