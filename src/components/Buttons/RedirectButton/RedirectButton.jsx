import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles.scss';
import Riples from 'react-ripples';

function getSize(sizeType) {
  if (sizeType == 'big') {
    return 'button--big';
  }
  return 'button--small';
}

const RedirectButton = ({ redirectUrl, label, variant, isVisible = true }) => {
  return (
    <Fragment>
      {isVisible && (
        <Riples during={750} color={'#ffffff33'}>
          <Link to={redirectUrl}>
            <div className={`button ${getSize(variant)}`}>{label}</div>
          </Link>
        </Riples>
      )}
    </Fragment>
  );
};

RedirectButton.propTypes = {
  redirectUrl: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['big', 'small']),
  isVisible: PropTypes.bool,
};

export default RedirectButton;
