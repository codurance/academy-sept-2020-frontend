import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/global.scss';
import { GoogleAuthProvider } from './components/Login/GoogleAuthProvider';
import Routes from './routes/Routes';

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <GoogleAuthProvider>
          <Routes />
        </GoogleAuthProvider>
      </Router>
    </React.StrictMode>
  );
};

export default App;
