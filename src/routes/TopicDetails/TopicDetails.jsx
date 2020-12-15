import PropTypes from 'prop-types';
import React, { Fragment, useEffect, useState } from 'react';
import DataNotFound from '../../components/DataNotFound/DataNotFound';
import Header from '../../components/Header/Header';
import ResourceList from '../../components/ResourceList/ResourceList';
import Wrapper from '../../components/Wrapper/Wrapper';
import useGetLearningPathDetails from '../../hooks/useGetLearninPaths/useGetLearningPathDetails';
import useGetTopicDetails from '../../hooks/useGetTopicDetail/useGetTopicDetails';
import './styles.scss';

const TopicDetails = ({ match }) => {
  const [topic, setTopic] = useState();
  const [error, setError] = useState();
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const getTopicDetails = useGetTopicDetails();
  const getLearningPathDetails = useGetLearningPathDetails();
  const topicId = match.params.topicId;
  const learningpathId = match.params.id;

  const fetchData = async () => {
    const { error, data } = await getTopicDetails(topicId);
    setError(error);
    setTopic(data);

    const {
      data: learningpath,
      error: learningpathError,
    } = await getLearningPathDetails(learningpathId);
    if (learningpathError) setError(learningpathError);
    setTitle(learningpath ? learningpath.name : null);
    setSubtitle(data ? `: ${data.name}` : '');
  };

  useEffect(() => {
    fetchData();
  }, [topicId]);
  return (
    <Fragment>
      <Header title={title && title} subtitle={subtitle && subtitle} />
      <Wrapper>
        <div className={'topic'}>
          {error ? (
            <DataNotFound type="topic" />
          ) : (
            topic &&
            topic.subtopics.map((subtopic, index) => {
              return (
                <article key={index} className="subtopic">
                  <h4 className="subtopic__title">{subtopic.name}</h4>
                  <ResourceList resources={subtopic.resources} />
                </article>
              );
            })
          )}
        </div>
      </Wrapper>
    </Fragment>
  );
};

export default TopicDetails;

TopicDetails.propTypes = {
  match: PropTypes.object,
};
