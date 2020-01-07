import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from '../Pages/Main';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/register" component={SignUp} />
      <Route exact path="/login" component={SignIn} />
    </Switch>
  );
}
