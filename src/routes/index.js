import React, { useReducer } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { Store } from '../store';
import modules from './store/modules';

import Route from './Route';

import Main from '../Pages/Main';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';

const { Provider } = Store;

export default function Routes() {
  const store = useReducer(modules, { user: {} });

  return (
    <Provider value={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} isPrivate />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/login" component={SignIn} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
