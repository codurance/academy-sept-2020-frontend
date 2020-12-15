import React from 'react';
import Button from '../Buttons/Button/Button';
import AddResourceList from '../ResourceList/ResourceList';
import PropTypes from 'prop-types';

const AddSubtopic = ({ subtopics, setSubtopics }) => {
  const addEmptySubtopic = () => {
    setSubtopics([...subtopics, { name: '', resources: [] }]);
  };

  const updateSubtopic = (index, value) => {
    subtopics[index].name = value;
    setSubtopics([...subtopics]);
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
            {/* <AddResourceList data={subtopic.resources} /> */}
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
