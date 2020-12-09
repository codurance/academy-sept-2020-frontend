import React, { Fragment, useEffect, useState } from 'react';
import './styles.scss';
import Header from '../../components/Header/Header';
import Wrapper from '../../components/Wrapper/Wrapper';

const LearningPathDetails = function (props) {
  console.log(props.match.params.id);
  return (
    <Fragment>
      <Header></Header>
      <Wrapper>
        <h3>Details</h3>
      </Wrapper>
    </Fragment>
  );
};

export default LearningPathDetails;
