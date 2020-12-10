import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Wrapper from '../Wrapper/Wrapper';

const ModalContainer = ({ isHidden, children }) => {
  return (
    <Fragment>
      {!isHidden && <section className={'modal'}>{children}</section>}
    </Fragment>
  );
};

export default ModalContainer;

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
