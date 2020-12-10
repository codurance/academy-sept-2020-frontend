import React, { Fragment, useEffect, useState } from 'react';
import './styles.scss';
import Header from '../../components/Header/Header';
import Wrapper from '../../components/Wrapper/Wrapper';
import useGetLearningPathDetails from '../../hooks/useGetLearninPaths/useGetLearningPathDetails';
import { useGoogleAuth } from '../../components/Login/GoogleAuthProvider';
import PropTypes from 'prop-types';

const LearningPathDetails = function ({ match }) {
  const learningPathId = match.params.id;

  const [data, setData] = useState([]);
  const [error, setError] = useState();

  const { isSignedIn } = useGoogleAuth();

  const getLearningPathDetails = useGetLearningPathDetails();

  const fetchData = async () => {
    if (!isSignedIn) return;
    const { error, data } = await getLearningPathDetails(learningPathId);
    data && setData(data);
    error && setError(error);
  };

  useEffect(() => {
    fetchData();
  }, [isSignedIn]);

  const listTopics = function (topics) {
    if (topics === undefined) {
      return;
    }
    return topics.map((topic, index) => {
      return (
        <Fragment key={index}>
          <h3>{topic.name}</h3>
          <p>{topic.description}</p>
        </Fragment>
      );
    });
  };

  return (
    <Fragment>
      <Header></Header>
      <Wrapper>
        <h3>Details</h3>
        <p>{data.name}</p>
        <p>{data.description}</p>
        {listTopics(data.topics)}
      </Wrapper>
    </Fragment>
  );
};

export default LearningPathDetails;

LearningPathDetails.propTypes = {
  match: PropTypes.object,
};
