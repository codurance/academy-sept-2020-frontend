import React, { Fragment, useEffect, useState } from 'react';
import './styles.scss';
import Header from '../../components/Header/Header';
import Wrapper from '../../components/Wrapper/Wrapper';
import useGetLearningPathDetails from '../../hooks/useGetLearninPaths/useGetLearningPathDetails';
import { useGoogleAuth } from '../../components/Login/GoogleAuthProvider';
import PropTypes from 'prop-types';
import Tile from '../../components/Tile/Tile';

const LearningPathDetails = function ({ match }) {
  const learningPathId = match.params.id;

  const [data, setData] = useState();
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
    return topics.map((topic) => {
      return (
        <Tile title={topic.name} textArea={topic.description} key={topic.id} />
      );
    });
  };

  return (
    <Fragment>
      <Header />
      <Wrapper>
        <Fragment>
          {data && (
            <Fragment>
              <section className={'learningpath'}>
                <h3>{data.name}</h3>
                <p>{data.description}</p>
              </section>
              {listTopics(data.topics)}
            </Fragment>
          )}
        </Fragment>
      </Wrapper>
    </Fragment>
  );
};

export default LearningPathDetails;

LearningPathDetails.propTypes = {
  match: PropTypes.object,
};
