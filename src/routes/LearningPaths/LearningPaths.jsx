import React, { Fragment, useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Tile from '../../components/Tile/Tile';
import Wrapper from '../../components/Wrapper/Wrapper';
import { apiCall } from '../../utils/apiCall';
import { getLearningPaths } from '../../utils/mockServerResponse';
const BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL;

getLearningPaths();

const LearningPaths = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  const fetchLearningPath = async () => {
    const { error, data } = await apiCall(`/learningpaths`, {
      auth: true,
      method: 'GET',
    });
    setData(data.learningPaths);
    setError(error);
  };

  useEffect(() => {
    fetchLearningPath();
  }, []);
  return (
    <Fragment>
      <Header></Header>
      <Wrapper>
        {data.map((item, index) => (
          <Tile
            key={index}
            title={item.title}
            textArea={item.description}
            button={
              <Button
                label="GO"
                variant="big"
                isDisabled={false}
                callback={() => {
                  console.log('on event button');
                }}
              ></Button>
            }
          ></Tile>
        ))}
      </Wrapper>
    </Fragment>
  );
};

export default LearningPaths;
