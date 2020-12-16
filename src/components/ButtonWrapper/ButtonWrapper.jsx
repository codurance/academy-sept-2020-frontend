import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const sizeSelector = (size) => {
  return size === '100' ? 'button-wrapper--big' : '';
};

const ButtonWrapper = ({ children, size = '75' }) => {
  return (
    <div className={`button-wrapper ${sizeSelector(size)}`}>{children}</div>
  );
};

export default ButtonWrapper;
ButtonWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['75', '100']),
};
