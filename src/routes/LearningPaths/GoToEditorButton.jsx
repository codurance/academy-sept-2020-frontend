import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button/Button';
import { useHistory } from 'react-router-dom';

function GoToEditorButton({ viewMode }) {
  const history = useHistory();

  function handleCreateNew() {
    history.push('/editor');
  }

  return (
    <Fragment>
      {!viewMode && (
        <Button
          label={'Create New'}
          variant={'big'}
          callback={handleCreateNew}
        />
      )}
    </Fragment>
  );
}

GoToEditorButton.propTypes = {
  viewMode: PropTypes.bool.isRequired,
};

export default GoToEditorButton;
