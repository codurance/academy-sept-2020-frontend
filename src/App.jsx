import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Routes/Home/Home';
import './styles/global.scss';

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
};

export default App;
