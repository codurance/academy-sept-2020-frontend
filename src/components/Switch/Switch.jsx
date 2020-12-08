import React, { Fragment } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import EnableViewMode from '../../assets/icons/enable-view-mode.svg';
import EnableEditorMode from '../../assets/icons/enable-editor-mode.svg';

const Switch = function ({ viewMode = true }) {
  const altText = viewMode ? 'Enable editor mode' : 'Enable editor mode';
  const imgSrc = viewMode ? EnableEditorMode : EnableViewMode;

  return (
    <Fragment>
      <img className={''} src={imgSrc} alt={altText} />
    </Fragment>
  );
};

export default Switch;

Switch.propTypes = {
  viewMode: PropTypes.bool,
};
