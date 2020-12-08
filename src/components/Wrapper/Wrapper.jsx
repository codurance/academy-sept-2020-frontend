import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Wrapper = ({ classNames = '', children }) => {
  return <div className={`wrapper ${classNames}`}>{children}</div>;
};

export default Wrapper;

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
