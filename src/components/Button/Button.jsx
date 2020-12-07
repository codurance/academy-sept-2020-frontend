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

function Button({ isDisabled = false, callback, variant = 'big', label }) {
  const invokeRippleEffect = (event) => {
    const clickedElement = event.currentTarget;
    const rippleOrigin = document.createElement('div');
    const rippleDiameter = clickedElement.clientWidth;
    const rippleRadius = rippleDiameter / 2;
    const clickedElementRect = clickedElement.getBoundingClientRect();
    const clickPosition = [
      event.clientX - clickedElementRect.left - rippleRadius,
      event.clientY - clickedElementRect.top - rippleRadius,
    ];

    rippleOrigin.style.height = `${rippleDiameter}px`;
    rippleOrigin.style.width = `${rippleDiameter}px`;
    rippleOrigin.style.left = `${clickPosition[0]}px`;
    rippleOrigin.style.top = `${clickPosition[1]}px`;
    rippleOrigin.classList.add('button__ripple');

    const preExisting = clickedElement.getElementsByClassName(
      'button__ripple'
    )[0];
    if (preExisting) {
      preExisting.remove();
    }
    clickedElement.appendChild(rippleOrigin);
  };
  return (
    <button
      disabled={isDisabled}
      onClick={(event) => {
        callback();
        invokeRippleEffect(event);
      }}
      className={`button ${getSize(variant)} ${hasDisableClass(isDisabled)}`}
    >
      {label}
    </button>
  );
}

export default Button;

Button.propTypes = {
  callback: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['big', 'small']),
  label: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};
