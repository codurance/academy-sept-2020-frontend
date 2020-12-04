import React, { Fragment } from 'react';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Tile from '../../components/Tile/Tile';
import Wrapper from '../../components/Wrapper/Wrapper';

const LearningPathsData = [
  {
    title: 'AWS',
    description: 'Serverless with AWS',
  },
  {
    title: 'Java',
    description: 'Learn Java by example',
  },
  {
    title: 'Python',
    description: 'Learn Python by example',
  },
];

const LearningPaths = () => {
  return (
    <Fragment>
      <Header></Header>
      <Wrapper>
        {LearningPathsData.map((item, index) => (
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
