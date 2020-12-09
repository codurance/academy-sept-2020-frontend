import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './routes/Home/Home';
import './styles/global.scss';
import { GoogleAuthProvider } from './components/Login/GoogleAuthProvider';
import LearningPaths from './routes/LearningPaths/LearningPaths';
import Editor from './routes/Editor/Editor';

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <GoogleAuthProvider>
          <Switch>
            <Route exact path="/survey" component={Home} />
            <Route exact path="/learningpaths" component={LearningPaths} />
            <Route exact path="/editor" component={Editor} />
            <Route path="/" component={Home} />
          </Switch>
        </GoogleAuthProvider>
      </Router>
    </React.StrictMode>
  );
};

export default App;
