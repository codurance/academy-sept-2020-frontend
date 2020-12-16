import React, { Fragment } from 'react';
import Button from '../Buttons/Button/Button';
import PropTypes from 'prop-types';

const AddResourceList = ({ data }) => {
  return (
    <section className="resources">
      <section className="resource">
        {[1, 2, 4].map((resource, index) => (
          <Fragment key={index}>
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <img src={ReactLogo} alt="Remove resource" />
          </Fragment>
        ))}
      </section>
      <Button callback={() => {}} label="ADD RESOURCE" variant="small" />
    </section>
  );
};

export default AddResourceList;

AddResourceList.propTypes = {
  data: PropTypes.array.isRequired,
};
