import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import ReactLogo from '../../assets/icons/bin.svg';
import AddResourceList from '../AddResourceList/AddResourceList';
import Button from '../Buttons/Button/Button';
import ButtonWrapper from '../ButtonWrapper/ButtonWrapper';
import './styles.scss';

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
      <ButtonWrapper size="100">
        <Button
          callback={addEmptySubtopic}
          label="ADD SUBTOPIC"
          variant="small"
        />
      </ButtonWrapper>
      {subtopics.map((subtopic, index) => {
        return (
          <Fragment key={index}>
            <div className="subtopic">
              <textarea
                className={'subtopic__name'}
                maxLength={500}
                aria-label="subtopic-name"
                value={subtopic.name}
                onChange={(event) => updateSubtopic(index, event.target.value)}
              />
              <img
                className="subtopic__remove"
                src={ReactLogo}
                alt="Remove resource"
                onClick={() => {
                  removeSubtopic(index);
                }}
              />
            </div>
            <AddResourceList
              subtopics={subtopics}
              subtopicIndex={index}
              setSubtopics={setSubtopics}
            />
          </Fragment>
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
