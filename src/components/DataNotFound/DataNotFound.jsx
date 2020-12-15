import React from 'react';
import PropTypes from 'prop-types';
import ReactLogo from '../../assets/icons/resource-not-found.svg';
import './styles.scss';

const DataNotFound = ({ type }) => {
  return (
    <section className="not-found">
      <h3>{`Sorry, couldn't find this ${type}`}</h3>
      <img className="not-found__image" src={ReactLogo} alt="Not found" />
    </section>
  );
};

export default DataNotFound;

DataNotFound.propTypes = {
  type: PropTypes.string.isRequired,
};
