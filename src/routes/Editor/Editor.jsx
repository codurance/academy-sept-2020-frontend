import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Wrapper from '../../components/Wrapper/Wrapper';
import Header from '../../components/Header/Header';
import {
  useGoogleAuth,
  fetchWithRefresh,
  googleUser,
} from '../../components/Login/GoogleAuthProvider';
import { apiCall } from '../../utils/apiCall';
import Toast from '../../components/Toast/Toast';

function Editor() {
  const BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL;
  const API_ENDPOINT = 'learningpath';

  const { fetchWithRefresh, googleUser } = useGoogleAuth();
  const [toastHidden, setToastHidden] = useState(true);
  const [learningPath, setLearningPath] = useState({
    name: null,
    description: null,
  });

  let history = useHistory();

  const setNewLearningPath = (event, fieldName) => {
    const newLearningPath = { ...learningPath };
    newLearningPath[fieldName] = event.target.value;
    setLearningPath(newLearningPath);
  };

  async function publishLearningPath() {
    if (!googleUser) {
      return;
    }

    await fetchWithRefresh();

    const { error } = await apiCall(`${BACKEND_API_URL}/${API_ENDPOINT}`, {
      method: 'POST',
      auth: true,
      body: learningPath,
    });

    if (error) {
      setToastHidden(false);
    } else {
      history.push('/learningpaths');
    }
  }

  return (
    <Fragment>
      <Header />
      <Wrapper>
        <Button label={'Publish'} callback={publishLearningPath} />
        <textarea
          aria-label="learning-path-title"
          onChange={(event) => setNewLearningPath(event, 'name')}
        />
        <textarea
          aria-label="learning-path-description"
          onChange={(event) => setNewLearningPath(event, 'description')}
        />
        <Toast
          textArea={'error'}
          variant={'negative'}
          title={'error'}
          isHidden={toastHidden}
          setHide={setToastHidden}
        />
      </Wrapper>
    </Fragment>
  );
}

export default Editor;
