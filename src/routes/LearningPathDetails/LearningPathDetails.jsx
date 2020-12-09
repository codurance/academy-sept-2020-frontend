import React, { Fragment, useEffect, useState } from 'react';
import './styles.scss';
import Header from '../../components/Header/Header';
import Wrapper from '../../components/Wrapper/Wrapper';
import useGetLearningPathDetails from '../../hooks/useGetLearninPaths/useGetLearningPathDetails';
import { useGoogleAuth } from '../../components/Login/GoogleAuthProvider';

const LearningPathDetails = function (props) {
  const learningPathId = props.match.params.id;

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

  return (
    <Fragment>
      <Header></Header>
      <Wrapper>
        <h3>Details</h3>
        <p>{data.name}</p>
        <p>{data.description}</p>
      </Wrapper>
    </Fragment>
  );
};

export default LearningPathDetails;
