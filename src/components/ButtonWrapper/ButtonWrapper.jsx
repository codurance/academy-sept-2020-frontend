import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ButtonWrapper = ({ children }) => {
  return <div className="button-wrapper">{children}</div>;
};

export default ButtonWrapper;
ButtonWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
