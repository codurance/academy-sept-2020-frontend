import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LearningPaths from '../LearningPaths/LearningPaths';
import Editor from '../Editor/Editor';
import { useGoogleAuth } from '../../components/Login/GoogleAuthProvider';
import Login from '../../components/Login/Login';
import QuestionPrompt from '../../components/QuestionPrompt/QuestionPrompt';
import LearningPathDetails from '../LearningPathDetails/LearningPathDetails';
import TopicDetails from '../TopicDetails/TopicDetails';

export default function Routes() {
  const { isSignedIn } = useGoogleAuth();

  const privateRoutes = (
    <Router>
      <Switch>
        <Route exact path="/survey" component={QuestionPrompt} />
        <Route exact path="/learningpath/:id" component={LearningPathDetails} />
        <Route exact path="/editor" component={Editor} />
        <Route
          exact
          path="/learningpath/:id/topic/:topicId"
          component={TopicDetails}
        />
        <Route path="/" component={LearningPaths} />
      </Switch>
    </Router>
  );

  return (
    <Fragment>
      <Router>{isSignedIn ? privateRoutes : <Login />}</Router>
    </Fragment>
  );
}
