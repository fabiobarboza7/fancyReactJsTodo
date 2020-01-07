import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/register" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/" />;
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
}
