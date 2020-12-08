import React, { Fragment, useState } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import EnableViewMode from '../../assets/icons/enable-view-mode.svg';
import EnableEditorMode from '../../assets/icons/enable-editor-mode.svg';

const Switch = function ({ viewMode = true, setViewMode }) {
  const [currentViewMode, setCurrentViewMode] = useState(viewMode);
  const altText = currentViewMode ? 'Enable editor mode' : 'Enable view mode';
  const imgSrc = currentViewMode ? EnableEditorMode : EnableViewMode;

  function switchMode() {
    setCurrentViewMode(!currentViewMode);
    setViewMode(!viewMode);
  }

  return (
    <Fragment>
      <img onClick={switchMode} src={imgSrc} alt={altText} />
    </Fragment>
  );
};

export default Switch;

Switch.propTypes = {
  viewMode: PropTypes.bool,
  setViewMode: PropTypes.func,
};
