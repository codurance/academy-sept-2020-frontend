import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

function getSize(sizeType) {
  if (sizeType == 'big') {
    return 'button--big';
  }
  return 'button--small';
}

function hasDisableClass(isDisabled) {
  return isDisabled ? 'disabled' : '';
}

function Button({ isDisabled = false, callback, variant, label }) {
  return (
    <button
      disabled={isDisabled}
      onClick={callback}
      className={`button ${getSize(variant)} ${hasDisableClass(isDisabled)}`}
    >
      {label}
    </button>
  );
}

export default Button;

Button.propTypes = {
  callback: PropTypes.func,
  variant: PropTypes.oneOf(['big', 'small']),
  label: PropTypes.string,
  isDisabled: PropTypes.bool,
};
