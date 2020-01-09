import React, { useReducer } from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyles from './styles/global';
import history from './services/history';

import { Store } from './store';
import modules from './store/modules';

const { Provider } = Store;

export default function App() {
  const store = useReducer(modules, { user: {} });

  return (
    <Provider value={store}>
      <Router history={history}>
        <Routes />
      </Router>
      <GlobalStyles />
    </Provider>
  );
}
