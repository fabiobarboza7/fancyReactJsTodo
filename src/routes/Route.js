import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Store } from '../store';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const [state] = useContext(Store);

  const { signed } = state;

  if (!signed && isPrivate) {
    return <Redirect to="/register" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && isPrivate) {
    return <Redirect to="/" />;
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
}
