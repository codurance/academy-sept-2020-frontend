import React, { useEffect, useState } from 'react';
import './styles.scss';
import Button from '../Button/Button';
import Tile from '../Tile/Tile';

const QuestionPrompt = () => {
  const [textArea, setTextArea] = useState('');
  const [disableSubmission, setdisableSubmission] = useState(true);

  useEffect(() => {
    setdisableSubmission(textArea === '');
  }, [textArea, setdisableSubmission]);

  function submit() {
    console.log(textArea);
  }

  return (
    <Tile
      title={
        'How do you use and organise notes and resources when learning a new subject?'
      }
      textArea={
        <textarea
          defaultValue={textArea}
          onChange={(event) => {
            setTextArea(event.target.value);
          }}
          placeholder={'Answer here...'}
        ></textarea>
      }
      button={
        <Button
          isDisabled={disableSubmission}
          label={'Submit'}
          variant={'big'}
          callback={submit}
        />
      }
    />
  );
};

export default QuestionPrompt;
