import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './routes/Home/Home';
import './styles/global.scss';

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/survey" component={Home} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
};

export default App;
