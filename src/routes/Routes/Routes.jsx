import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import LearningPaths from '../LearningPaths/LearningPaths';
import Editor from '../Editor/Editor';

export default function Routes() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/survey" component={Home} />
        <Route exact path="/learningpaths" component={LearningPaths} />
        <Route exact path="/editor" component={Editor} />
        <Route path="/" component={Home} />
      </Switch>
    </Fragment>
  );
}
