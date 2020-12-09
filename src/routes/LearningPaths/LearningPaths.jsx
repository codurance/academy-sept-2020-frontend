import './styles.scss';
import React, { Fragment, useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Tile from '../../components/Tile/Tile';
import Wrapper from '../../components/Wrapper/Wrapper';
import getLearningPaths from '../../services/getLearningPaths';
import Toast from '../../components/Toast/Toast';
import Switch from '../../components/Switch/Switch';
import GoToEditorButton from './GoToEditorButton';

const LearningPaths = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [hide, setHide] = useState(true);

  const [viewMode, setViewMode] = useState(true);

  useEffect(() => {
    setHide(!error);
  }, [error, setHide]);

  const fetchData = async () => {
    const { error, data } = await getLearningPaths();
    data && setData(data.learningPaths);
    setError(error);
  };

  const getClassName = () => {
    return viewMode ? '' : 'editor';
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Fragment>
      <Header>
        <Switch viewMode={viewMode} setViewMode={setViewMode} />
      </Header>
      <Wrapper classNames={getClassName()}>
        <GoToEditorButton viewMode={viewMode} />
        {data.map((item, index) => (
          <Tile
            key={index}
            title={item.name}
            textArea={item.description}
          ></Tile>
        ))}
        {error && (
          <Toast
            variant="negative"
            title="Error"
            textArea={error}
            isHidden={hide}
            setHide={setHide}
          />
        )}
      </Wrapper>
    </Fragment>
  );
};

export default LearningPaths;
