import React, { Fragment } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

function getVariant(variant) {
  if (variant == 'positive') {
    return 'toast--positive';
  } else if (variant == 'negative') return 'toast--negative';
  return 'toast--neutral';
}

function fadeOut(isHidden) {
  return isHidden ? 'toast--invisible' : 'toast--visible';
}
const Toast = ({ variant = 'neutral', title, textArea, isHidden }) => {
  return (
    <Fragment>
      <article
        hidden={isHidden}
        className={`toast ${getVariant(variant)} ${fadeOut(isHidden)} `}
      >
        <h3>{title}</h3>
        <div className={'toast__content'}>{textArea}</div>
      </article>
    </Fragment>
  );
};

export default Toast;

Toast.propTypes = {
  variant: PropTypes.oneOf(['positive', 'neutral', 'negative']),
  textArea: PropTypes.string,
  title: PropTypes.string,
  isHidden: PropTypes.bool,
};
