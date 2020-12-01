import React from 'react';
import './styles.scss';
import Button from '../Button/Button';
import Tile from '../Tile/Tile';

const QuestionPrompt = () => {
  function submit() {
    console.log('submitting the text area');
  }

  return (
    <Tile
      title={
        'How do you use and organise notes and resources when learning a new subject?'
      }
      textArea={<textarea defaultValue={'Answer here...'}></textarea>}
      button={<Button label={'Submit'} variant={'big'} callback={submit} />}
    />
  );
};

export default QuestionPrompt;
