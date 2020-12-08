import React, { Fragment, useState } from 'react';
import Button from '../../components/Button/Button';

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
      <Button label={'Publish'} callback={() => {}} />
      <textarea
        aria-label="learning-path-title"
        onChange={(event) => setNewLearningPath(event, 'title')}
      />
      <textarea
        aria-label="learning-path-description"
        onChange={(event) => setNewLearningPath(event, 'description')}
      />
    </Fragment>
  );
}

export default Editor;
