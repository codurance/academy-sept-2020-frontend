import React, { Fragment } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Tile = ({ title, textArea, button }) => {
  return (
    <Fragment>
      <article className={'tile tile--q'}>
        <h3>{title}</h3>
        <div className={'tile__content'}>
          {textArea}
          {button}
        </div>
      </article>
    </Fragment>
  );
};

export default Tile;

Tile.propTypes = {
  title: PropTypes.string,
  textArea: PropTypes.node,
  button: PropTypes.node,
};
