import React from 'react';
import { Router } from 'react-router-dom';
import history from './services/history';
import Routes from './routes';
import GlobalStyles from './styles/global';

export default function App() {
  return (
    <>
      <Routes history={history}>
        <Router />
      </Routes>
      <GlobalStyles />
    </>
  );
}
