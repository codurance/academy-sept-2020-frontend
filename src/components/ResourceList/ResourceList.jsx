import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

const ResourceList = ({ resources }) => {
  return (
    <ul className="resources">
      {resources &&
        resources.map((resource, index) => {
          return (
            <li key={index} className="resources__item">
              <a href={resource.url} rel="noreferrer" target="_blank">
                {resource.label}
              </a>
            </li>
          );
        })}
    </ul>
  );
};

export default ResourceList;

ResourceList.propTypes = {
  resources: PropTypes.array,
};
