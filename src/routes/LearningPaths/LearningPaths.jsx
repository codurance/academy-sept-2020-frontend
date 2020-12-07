import React, { Fragment, useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Tile from '../../components/Tile/Tile';
import Wrapper from '../../components/Wrapper/Wrapper';
import getLearningPaths from '../../services/getLearningPaths';
import Toast from '../../components/Toast/Toast';

const LearningPaths = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  const fetchData = async () => {
    const { error, data } = await getLearningPaths();
    data && setData(data.learningPaths);
    setError(error);
    console.log(error);
  };

  useEffect(() => {
    fetchData();
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
        {error && (
          <Toast
            variant="negative"
            title="Error"
            textArea={error}
            isHidden={false}
          />
        )}
      </Wrapper>
    </Fragment>
  );
};

export default LearningPaths;
