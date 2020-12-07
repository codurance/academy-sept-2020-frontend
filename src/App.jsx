import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './routes/Home/Home';
import './styles/global.scss';
import { GoogleAuthProvider } from './components/Login/GoogleAuthProvider';
import LearningPaths from './routes/LearningPaths/LearningPaths';

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <GoogleAuthProvider>
          <Switch>
            <Route exact path="/survey" component={Home} />
            <Route exact path="/learningpaths" component={LearningPaths} />
            <Route path="/" component={Home} />
          </Switch>
        </GoogleAuthProvider>
      </Router>
    </React.StrictMode>
  );
};

export default App;
