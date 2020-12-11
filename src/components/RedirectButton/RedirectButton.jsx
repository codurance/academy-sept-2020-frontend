import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

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
        <div className={`button ${getSize(variant)}`}>
          <Link to={redirectUrl}>{label}</Link>
        </div>
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
