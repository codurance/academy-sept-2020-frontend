import React, { useEffect, useState } from 'react';
import './styles.scss';
import Button from '../Button/Button';
import Tile from '../Tile/Tile';
import { apiCall } from '../../utils/apiCall';

const QuestionPrompt = () => {
  const [textArea, setTextArea] = useState('');
  const [disableSubmission, setdisableSubmission] = useState(true);

  useEffect(() => {
    setdisableSubmission(textArea === '');
  }, [textArea, setdisableSubmission]);

  function submit() {
    const email = localStorage.getItem('email');
    if (email) {
      apiCall(
        'http://all-aboard-api-dev.eu-west-2.elasticbeanstalk.com/survey',
        {
          method: 'POST',
          auth: true,
          body: { email: email, preference: textArea },
        }
      );
    }
  }

  return (
    <Tile
      title={'How do you organise and make use of your learning resources?'}
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
