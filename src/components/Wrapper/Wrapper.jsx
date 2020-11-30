import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Wrapper = ({ children }) => {
  return <div className={'wrapper'}>{children}</div>;
};

export default Wrapper;

Wrapper.propTypes = {
  children: PropTypes.node,
};
