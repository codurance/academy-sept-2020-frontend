import PropTypes from 'prop-types';
import React, { Fragment, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import 'styles.scss';
import AddSubtopic from '../../components/AddSubtopic/AddSubtopic';
import Button from '../../components/Buttons/Button/Button';
import Header from '../../components/Header/Header';
import Wrapper from '../../components/Wrapper/Wrapper';
import ButtonWrapper from '../../components/ButtonWrapper/ButtonWrapper';

const haveResourcesEmptyFields = (isEmptyResource, subtopics) => {
  subtopics.forEach((subtopic) => {
    isEmptyResource = subtopic.resources.find(
      (resource) => resource.label == '' || resource.url === ''
    );
  });
  return isEmptyResource;
};

const hasTopicEmptyFields = (name, description) => {
  if (!name || !description) return true;
  return false;
};
const haveSubtopicsEmptyFields = (subtopics) => {
  let isEmptyResource = false;
  const isEmptyName = subtopics.find((element) => element.name === '');
  if (isEmptyName) return true;

  isEmptyResource = haveResourcesEmptyFields(isEmptyResource, subtopics);
  if (isEmptyResource) return true;
  return false;
};

const CreateTopic = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [subtopics, setSubtopics] = useState([]);
  const [disableSave, setDisableSave] = useState(true);
  const history = useHistory();

  useEffect(() => {
    console.log('asd');
    if (
      hasTopicEmptyFields(name, description) ||
      haveSubtopicsEmptyFields(subtopics)
    ) {
      return setDisableSave(true);
    }
    setDisableSave(false);
  }, [subtopics, disableSave, name, description]);

  const updateInMemoryLearningpath = (learningpath) => {
    learningpath.topics = [
      ...learningpath.topics,
      { name, description, subtopics },
    ];
    localStorage.setItem('learningpath', JSON.stringify(learningpath));
  };

  const createInMemoryLearningpath = () => {
    const learningpath = {
      name: '',
      description: '',
      topics: [{ name, description, subtopics }],
    };
    localStorage.setItem('learningpath', JSON.stringify(learningpath));
  };

  const onSaveTopic = async () => {
    let learningpath = JSON.parse(localStorage.getItem('learningpath'));
    if (learningpath) {
      updateInMemoryLearningpath(learningpath);
    } else {
      createInMemoryLearningpath();
    }
    history.push(`/editor`);
  };

  return (
    <Fragment>
      <Header title="Topic Editor" />
      <Wrapper>
        <ButtonWrapper>
          <Button
            label="Save"
            callback={onSaveTopic}
            isDisabled={disableSave}
            variant="small"
          />
        </ButtonWrapper>
        <section className="editor__container">
          <h3>Title</h3>
          <textarea
            maxLength={500}
            className="editor__container__name"
            aria-label="learning-path-title"
            placeholder="topic title"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <h3>Description</h3>
          <textarea
            placeholder="topic description"
            className="editor__container__description"
            aria-label="learning-path-description"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />

          {<AddSubtopic subtopics={subtopics} setSubtopics={setSubtopics} />}
        </section>
      </Wrapper>
    </Fragment>
  );
};

export default CreateTopic;

CreateTopic.propTypes = {
  match: PropTypes.object,
};
