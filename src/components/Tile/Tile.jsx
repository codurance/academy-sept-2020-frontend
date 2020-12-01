import React, { Fragment } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

function Tile({ title }) {
  return (
    <Fragment>
      <article className={'tile tile--q'}>
        <h3>Codurance Academy</h3>

        <div className={'tile__content'}>
          <p>
            {' '}
            This 2 months program covers areas joined throught apprenticeship
            recruitmen aimed at new Codurance employees who joined throught
            apprenticeship recruitment path. This 2 months program covers areas
            ranging from TDD to QA. It is aimed at new Codurance employees who
            joined throught apprenticeship recruitment path.{' '}
          </p>
          <Button
            callback={() => {
              console.log('Tile button clicked');
            }}
            label={'Sign In'}
            variant={'big'}
          />
        </div>
      </article>
    </Fragment>
  );
}

export default Tile;

Tile.propTypes = {
  title: PropTypes.string,
};
