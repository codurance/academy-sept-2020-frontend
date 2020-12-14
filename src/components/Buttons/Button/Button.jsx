import React from 'react';
import '../styles.scss';
import PropTypes from 'prop-types';
import Riples from 'react-ripples';

function getSize(sizeType) {
  if (sizeType == 'big') {
    return 'button--big';
  }
  return 'button--small';
}

function hasDisableClass(isDisabled) {
  return isDisabled ? 'disabled' : '';
}

function Button({ isDisabled = false, callback, variant = 'big', label }) {
  return (
    <Riples during={750} color={'#ffffff33'}>
      <button
        disabled={isDisabled}
        onClick={callback}
        className={`button ${getSize(variant)} ${hasDisableClass(isDisabled)}`}
      >
        {label}
      </button>
    </Riples>
  );
}

export default Button;

Button.propTypes = {
  callback: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['big', 'small']),
  label: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};
