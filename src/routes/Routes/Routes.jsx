import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import LearningPaths from '../LearningPaths/LearningPaths';
import Editor from '../Editor/Editor';
import { useGoogleAuth } from '../../components/Login/GoogleAuthProvider';
import Login from '../../components/Login/Login';

export default function Routes() {
  const { isSignedIn } = useGoogleAuth();
  return (
    <Fragment>
      <Router>
        {isSignedIn ? (
          <Switch>
            <Route exact path="/survey" component={Home}/>
            <Route exact path="/learningpaths" component={LearningPaths}/>
            <Route exact path="/editor" component={Editor}/>
            <Route path="/" component={Home}/>
          </Switch>
        ) : (
          <Login />
        )}
      </Router>
    </Fragment>
  );
}
