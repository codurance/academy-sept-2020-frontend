import PropTypes from 'prop-types';
import React, { Fragment, useEffect, useState } from 'react';
import RedirectButton from '../../components/Buttons/RedirectButton/RedirectButton';
import Header from '../../components/Header/Header';
import ModalContainer from '../../components/ModalContainer/ModalContainer';
import Tile from '../../components/Tile/Tile';
import Toast from '../../components/Toast/Toast';
import Wrapper from '../../components/Wrapper/Wrapper';
import useGetLearningPathDetails from '../../hooks/useGetLearninPaths/useGetLearningPathDetails';

const Update = ({ match }) => {
  const learningPathId = match.params.id;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasErrorOnSubmision, setHasErrorOnSubmision] = useState(false);

  const [data, setData] = useState();
  const [error, setError] = useState();
  const getLearningPathDetails = useGetLearningPathDetails();
  const [titleInput, setTitleInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');

  const fetchData = async () => {
    const { error, data } = await getLearningPathDetails(learningPathId);
    setTitleInput(data.name);
    setDescriptionInput(data.description);
    data && setData(data);
    error && setError(error);
  };

  const handleToasedBasedOnResult = (error) => {
    if (error) {
      setIsSubmitted(false);
      setHasErrorOnSubmision(false);
    } else {
      history.push('/');
    }
  };

  const listTopics = (topics) =>
    topics.map((topic) => {
      return (
        <Tile title={topic.name} textArea={topic.description} key={topic.id} />
      );
    });

  useEffect(() => {
    fetchData();
  }, [learningPathId]);

  return (
    <Fragment>
      <Header />
      <Wrapper>
        <div className="button-wrapper">
          <RedirectButton label={'Publish'} redirectUrl={`/`} variant={'big'} />
        </div>
        <div className="editor__container">
          <h3>Title</h3>
          <textarea
            defaultValue={titleInput}
            maxLength={500}
            aria-label="learning-path-title"
            disabled
            onChange={(event) => {
              setTitleInput(event.target.value);
              setNewLearningPath(event, 'name');
            }}
          />
          <h3>Description</h3>
          <textarea
            defaultValue={descriptionInput}
            aria-label="learning-path-description"
            disabled
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
        </div>

        <div className="button-wrapper">
          <RedirectButton
            label={'ADD TOPIC'}
            redirectUrl={`/editor/${learningPathId}/new-topic`}
            variant={'big'}
          />
        </div>
        <section className="topics">{data && listTopics(data.topics)}</section>
      </Wrapper>
    </Fragment>
  );
};

export default Update;

Update.propTypes = {
  match: PropTypes.object,
};
