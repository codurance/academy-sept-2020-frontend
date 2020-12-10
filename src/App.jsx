import React from 'react';
import './styles/global.scss';
import { GoogleAuthProvider } from './components/Login/GoogleAuthProvider';
import Routes from './routes/Routes/Routes';

const App = () => {
  return (
    <React.StrictMode>
      <GoogleAuthProvider>
        <Routes />
      </GoogleAuthProvider>
    </React.StrictMode>
  );
};

export default App;
