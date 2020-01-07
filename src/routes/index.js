import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';

import Main from '../Pages/Main';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} isPrivate />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/login" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
}
