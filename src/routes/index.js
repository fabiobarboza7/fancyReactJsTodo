import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Main from '../Pages/Main';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Main} isPrivate />
      <Route path="/register" component={SignUp} />
      <Route path="/login" component={SignIn} />
    </Switch>
  );
}
