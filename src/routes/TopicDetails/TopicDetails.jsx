import PropTypes from 'prop-types';
import React, { Fragment, useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Wrapper from '../../components/Wrapper/Wrapper';
import useGetTopicDetails from '../../hooks/useGetTopicDetail/useGetTopicDetails';
import { serverMock } from '../../utils/mockServerResponse';
import './styles.scss';

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
  const listSubTopics = (subtopics) =>
    subtopics.map((subtopic, index) => {
      return (
        <Fragment key={index}>
          <h3>{subtopic.name}</h3>
          {subtopic.resources.map((resource, index) => {
            return (
              <Fragment key={index}>
                <a href={resource.url} rel="noreferrer" target="_blank">
                  {resource.label}
                </a>
              </Fragment>
            );
          })}
        </Fragment>
      );
    });

  useEffect(() => {
    fetchData();
  }, [topicId]);
  return (
    <Fragment>
      <Header />
      <Wrapper>
        <Fragment>
          {topic && (
            <Fragment>
              <section className={'topic'}>
                <h3>{topic.name}</h3>
                <p>{topic.description}</p>
              </section>
              {listSubTopics(topic.subtopics)}
            </Fragment>
          )}
        </Fragment>
      </Wrapper>
    </Fragment>
  );
};

export default TopicDetails;

TopicDetails.propTypes = {
  match: PropTypes.object,
};
