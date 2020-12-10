import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ModalContainer = ({ isHidden, children }) => {
  return (
    <Fragment>
      {!isHidden && <section className={'modal'}>{children}</section>}
    </Fragment>
  );
};

export default ModalContainer;

ModalContainer.propTypes = {
  children: PropTypes.node.isRequired,
  isHidden: PropTypes.bool.isRequired,
};
