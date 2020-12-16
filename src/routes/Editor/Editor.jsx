import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Buttons/Button/Button';
import RedirectButton from '../../components/Buttons/RedirectButton/RedirectButton';
import Header from '../../components/Header/Header';
import ModalContainer from '../../components/ModalContainer/ModalContainer';
import Tile from '../../components/Tile/Tile';
import Toast from '../../components/Toast/Toast';
import Wrapper from '../../components/Wrapper/Wrapper';
import useAuthenticatedApiCall from '../../hooks/useAuthenticatedApiCall/useAuthenticatedApiCall';
import './styles.scss';

const BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL;
const API_ENDPOINT = 'learningpath';

function Editor() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasErrorOnSubmision, setHasErrorOnSubmision] = useState(false);
  const [titleInput, setTitleInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [disablePublish, setDisablePublish] = useState(true);
  const [learningPath, setLearningPath] = useState({
    name: null,
    description: null,
  });
  const [topics, setTopics] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setDisablePublish(descriptionInput === '' || titleInput === '');
  }, [setDisablePublish, descriptionInput, titleInput]);

  useEffect(() => {
    const storageTopics = localStorage.getItem('topics');
    if (storageTopics) {
      setTopics(storageTopics);
    }
  }, []);

  const setNewLearningPath = (event, fieldName) => {
    const newLearningPath = { ...learningPath };
    newLearningPath[fieldName] = event.target.value;
    setLearningPath(newLearningPath);
  };

  const authenticatedApiCall = useAuthenticatedApiCall();
  async function publishLearningPath() {
    const { error } = await authenticatedApiCall(
      `${BACKEND_API_URL}/${API_ENDPOINT}`,
      {
        method: 'POST',
        auth: true,
        body: learningPath,
      }
    );
    setHasErrorOnSubmision(error !== undefined);
    setIsSubmitted(true);
  }

  const handleToasedBasedOnResult = (error) => {
    if (error) {
      setIsSubmitted(false);
      setHasErrorOnSubmision(false);
    } else {
      history.push('/');
    }
  };

  const listTopics = () =>
    topics.map((topic) => {
      return (
        <Tile title={topic.name} textArea={topic.description} key={topic.id} />
      );
    });

  const addTopic = () => {
    const learningpath = {
      name: titleInput,
      description: descriptionInput,
      topics,
    };
    localStorage.setItem('learningpath', learningpath);
    history.push('/editor/new-topic');
  };

  return (
    <Fragment>
      <Header />
      <Wrapper>
        <div className="editor__container">
          <Button
            label={'Publish'}
            callback={publishLearningPath}
            isDisabled={disablePublish}
          />
          <h3>Title</h3>
          <textarea
            defaultValue={titleInput}
            maxLength={500}
            aria-label="learning-path-title"
            onChange={(event) => {
              setTitleInput(event.target.value);
              setNewLearningPath(event, 'name');
            }}
          />
          <h3>Description</h3>
          <textarea
            defaultValue={descriptionInput}
            aria-label="learning-path-description"
            onChange={(event) => {
              setNewLearningPath(event, 'description');
              setDescriptionInput(event.target.value);
            }}
          />
          <ModalContainer isHidden={!isSubmitted}>
            <Toast
              textArea={
                hasErrorOnSubmision
                  ? 'error'
                  : "Well done! You're very creative, wow."
              }
              variant={hasErrorOnSubmision ? 'negative' : 'positive'}
              title={hasErrorOnSubmision ? 'error' : 'Content Published'}
              isHidden={!isSubmitted}
              setHide={setIsSubmitted}
              callbackOnAction={handleToasedBasedOnResult}
            />
          </ModalContainer>

          <div className="button-wrapper">
            <Button label={'ADD TOPIC'} variant={'big'} callback={addTopic} />
          </div>
          <section className="topics">{listTopics()}</section>
        </div>
      </Wrapper>
    </Fragment>
  );
}

export default Editor;
