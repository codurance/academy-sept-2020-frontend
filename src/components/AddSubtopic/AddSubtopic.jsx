import PropTypes from 'prop-types';
import React from 'react';
import ReactLogo from '../../assets/icons/bin.svg';
import AddResourceList from '../AddResourceList/AddResourceList';
import Button from '../Buttons/Button/Button';

const AddSubtopic = ({ subtopics, setSubtopics }) => {
  const addEmptySubtopic = () => {
    setSubtopics([...subtopics, { name: '', resources: [] }]);
  };

  const updateSubtopic = (index, value) => {
    subtopics[index].name = value;
    setSubtopics([...subtopics]);
  };

  const removeSubtopic = (index) => {
    const newSubctopics = [...subtopics];
    newSubctopics.splice(index, index + 1);
    setSubtopics(newSubctopics);
  };

  return (
    <section className={'subtopics'}>
      <h3>Subtopics</h3>
      <Button
        callback={addEmptySubtopic}
        label="ADD SUBTOPIC"
        variant="small"
      />
      {subtopics.map((subtopic, index) => {
        return (
          <section
            data-testid={`subtopic${index}`}
            className="subtopic"
            key={index}
          >
            <textarea
              className={'name'}
              maxLength={500}
              aria-label="subtopic-name"
              value={subtopic.name}
              onChange={(event) => updateSubtopic(index, event.target.value)}
            />
            <img
              src={ReactLogo}
              alt="Remove resource"
              onClick={() => {
                removeSubtopic(index);
              }}
            />
            <AddResourceList
              subtopics={subtopics}
              subtopicIndex={index}
              setSubtopics={setSubtopics}
            />
          </section>
        );
      })}
    </section>
  );
};

export default AddSubtopic;

AddSubtopic.propTypes = {
  subtopics: PropTypes.array.isRequired,
  setSubtopics: PropTypes.func.isRequired,
};
