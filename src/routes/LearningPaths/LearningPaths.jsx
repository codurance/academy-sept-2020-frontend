import React, { Fragment, useEffect, useState } from 'react';
import './styles.scss';
import Header from '../../components/Header/Header';
import Tile from '../../components/Tile/Tile';
import Toast from '../../components/Toast/Toast';
import Wrapper from '../../components/Wrapper/Wrapper';
import useGetLearningPaths from '../../hooks/useGetLearninPaths/useGetLearningPaths';
import { useGoogleAuth } from '../../components/Login/GoogleAuthProvider';
import Switch from '../../components/Switch/Switch';
import GoToEditorButton from './GoToEditorButton';

const LearningPaths = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [hide, setHide] = useState(true);

  const { isSignedIn} = useGoogleAuth();

  const [viewMode, setViewMode] = useState(true);

  useEffect(() => {
    setHide(!error);
  }, [error, setHide]);

  const getLearningPaths = useGetLearningPaths();
  const fetchData = async () => {
    if (!isSignedIn) return;
    const { error, data } = await getLearningPaths();
    data && setData(data.learningPaths);
    setError(error);
  };

  const getClassName = () => {
    return viewMode ? '' : 'editor';
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSignedIn]);
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
