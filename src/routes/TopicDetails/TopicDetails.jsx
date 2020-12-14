import PropTypes from 'prop-types';
import React, { Fragment, useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Wrapper from '../../components/Wrapper/Wrapper';
import useGetTopicDetails from '../../hooks/useGetTopicDetail/useGetTopicDetails';
import { serverMock } from '../../utils/mockServerResponse';

const TopicDetails = ({ match }) => {
  const [topic, setTopic] = useState();
  const [error, setError] = useState();
  const getTopicDetails = useGetTopicDetails();
  const topicId = match.params.id;

  const fetchData = async () => {
    serverMock();

    const { error, data } = await getTopicDetails(topicId);
    setError(error);
    setTopic(data);
  };
  console.log(topic);

  useEffect(() => {
    fetchData();
  }, [topicId]);
  return (
    <Fragment>
      <Header />
      <Wrapper>{topicId}</Wrapper>
    </Fragment>
  );
};

export default TopicDetails;

TopicDetails.propTypes = {
  match: PropTypes.object,
};
