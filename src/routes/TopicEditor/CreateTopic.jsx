import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'styles.scss';
import AddSubtopic from '../../components/AddSubtopic/AddSubtopic';
import Button from '../../components/Buttons/Button/Button';
import Header from '../../components/Header/Header';
import Wrapper from '../../components/Wrapper/Wrapper';

const CreateTopic = ({ match }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [subtopics, setSubtopics] = useState([]);

  const learningpathId = match.params.id;
  const history = useHistory();

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
        <div className="button-wrapper">
          <Button label="Save" callback={onSaveTopic} />
        </div>

        <section className="editor__container">
          <h3>Title</h3>
          <textarea
            className={'title'}
            maxLength={500}
            aria-label="learning-path-title"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <h3>Description</h3>
          <textarea
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
