import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import ReactLogo from '../../assets/icons/codurance-logo.svg';
import './styles.scss';

const Header = ({ children, title = 'All Aboard', subtitle }) => {
  return (
    <nav className={'header'}>
      <div className={'header__content'}>
        <div className={'header__content--main'}>
          <Link to={'/'}>
            <img
              className={'header__logo'}
              src={ReactLogo}
              alt="Codurance Logo"
            />
          </Link>
          <h1 className={'header__title'}>{title}</h1>
          {subtitle && <h2 className={'header__subtitle'}>{subtitle}</h2>}
        </div>
        {children}
      </div>
    </nav>
  );
};

export default Header;

Header.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
