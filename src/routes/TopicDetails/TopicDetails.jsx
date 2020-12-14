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
        <article key={index} className="subtopic">
          <h4 className="subtopic__title">{subtopic.name}</h4>
          <ul className="resources">
            {subtopic.resources.map((resource, index) => {
              return (
                <li key={index} className="resources__item">
                  <a href={resource.url} rel="noreferrer" target="_blank">
                    {resource.label}
                  </a>
                </li>
              );
            })}
          </ul>
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
                <h3>{topic.name}</h3>
                <p>{topic.description}</p>
              </section>
              {listSubTopics(topic.subtopics)}
            </div>
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
