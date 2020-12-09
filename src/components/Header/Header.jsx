import React from 'react';
import ReactLogo from '../../assets/icons/codurance-logo.svg';
import './styles.scss';
import PropTypes from 'prop-types';

const Header = ({ children }) => {
  return (
    <nav className={'header'}>
      <div className={'header__content'}>
        <div className={'header__content--main'}>
          <img
            className={'header__logo'}
            src={ReactLogo}
            alt="Codurance Logo"
          />
          <h1>All Aboard</h1>
        </div>
        {children}
      </div>
    </nav>
  );
};

export default Header;

Header.propTypes = {
  children: PropTypes.element,
};
