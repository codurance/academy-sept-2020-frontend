import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

function getSize(sizeType) {
  if (sizeType == 'big') {
    return 'button--big';
  }
  return 'button--small';
}

function Button({ callback, variant, label }) {
  return (
    <button onClick={callback} className={`button ${getSize(variant)}`}>
      {label}
    </button>
  );
}

export default Button;

Button.propTypes = {
  callback: PropTypes.func,
  variant: PropTypes.oneOf(['big', 'small']),
  label: PropTypes.string,
};
