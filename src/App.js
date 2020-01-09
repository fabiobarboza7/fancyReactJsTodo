import React, { useReducer } from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyles from './styles/global';
import history from './services/history';

import { Store } from './store';
import modules from './store/modules';
import { useLocalStorageSetState } from './store/use-local-storage-set-state';

const { Provider } = Store;
export default function App() {
  const localState = JSON.parse(localStorage.getItem('user'));

  const store = useReducer(
    modules,
    useLocalStorageSetState(localState || { user: {} }, 'user')
  );
  return (
    <Provider value={store}>
      <Router history={history}>
        <Routes />
      </Router>
      <GlobalStyles />
    </Provider>
  );
}
