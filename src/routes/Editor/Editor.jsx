import React, { Fragment, useState } from 'react';
import Button from '../../components/Button/Button';
import Wrapper from '../../components/Wrapper/Wrapper';
import Header from '../../components/Header/Header';

function Editor() {
  const [learningPath, setLearningPath] = useState({
    title: null,
    description: null,
  });

  const setNewLearningPath = (event, fieldName) => {
    const newLearningPath = { ...learningPath };
    newLearningPath[fieldName] = event.target.value;
    setLearningPath(newLearningPath);
  };

  return (
    <Fragment>
      <Header />
      <Wrapper>
        <Button label={'Publish'} callback={() => {}} />
        <textarea
          aria-label="learning-path-title"
          onChange={(event) => setNewLearningPath(event, 'title')}
        />
        <textarea
          aria-label="learning-path-description"
          onChange={(event) => setNewLearningPath(event, 'description')}
        />
      </Wrapper>
    </Fragment>
  );
}

export default Editor;
