import React, { Fragment } from 'react';
import Button from '../Buttons/Button/Button';
import PropTypes from 'prop-types';
import ReactLogo from '../../assets/icons/bin.svg';

const AddResourceList = ({ subtopics, subtopicIndex, setSubtopics }) => {
  const introduceEmptySubtopic = () => {
    return subtopics.map((subtopic, index) => {
      if (index === subtopicIndex) {
        subtopic.resources = [...subtopic.resources, { label: '', url: '' }];
      }
      return subtopic;
    });
  };

  const addEmptyResource = () => {
    const newSubctopics = introduceEmptySubtopic();

    setSubtopics(newSubctopics);
  };

  const updateResource = (event, resourceIndex, field) => {
    const newSubctopics = [...subtopics];
    newSubctopics[subtopicIndex].resources[resourceIndex][field] =
      event.target.value;
    setSubtopics(newSubctopics);
  };
  return (
    <section className="resources">
      <section className="resource">
        {subtopics[subtopicIndex].resources.map((resource, index) => (
          <Fragment key={index}>
            <input
              type="text"
              name="label"
              value={resource.label}
              onChange={(event) => {
                updateResource(event, index, 'label');
              }}
            />
            <input
              type="text"
              name="url"
              value={resource.url}
              onChange={(event) => {
                updateResource(event, index, 'url');
              }}
            />
            <img src={ReactLogo} alt="Remove resource" />
          </Fragment>
        ))}
      </section>
      <Button
        callback={addEmptyResource}
        label="ADD RESOURCE"
        variant="small"
      />
    </section>
  );
};

export default AddResourceList;

AddResourceList.propTypes = {
  subtopics: PropTypes.array.isRequired,
  subtopicIndex: PropTypes.number.isRequired,
  setSubtopics: PropTypes.func.isRequired,
};
