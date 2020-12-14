import PropTypes from 'prop-types';
import React, { Fragment, useEffect, useState } from 'react';
import DataNotFound from '../../components/DataNotFound/DataNotFound';
import Header from '../../components/Header/Header';
import ResourceList from '../../components/ResourceList/ResourceList';
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
        <article key={index} className="subtopic">
          <h4 className="subtopic__title">{subtopic.name}</h4>
          <ResourceList resources={subtopic.resources} />
        </article>
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
            <div className="topic">
              <section className={'topic__description'}>
                <h3 className={'topic__description__title'}>{topic.name}</h3>
                <p>{topic.description}</p>
              </section>
              {listSubTopics(topic.subtopics)}
            </div>
          )}
          {error && <DataNotFound type="topic" />}
        </Fragment>
      </Wrapper>
    </Fragment>
  );
};

export default TopicDetails;

TopicDetails.propTypes = {
  match: PropTypes.object,
};
