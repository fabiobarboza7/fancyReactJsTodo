import React from 'react';
import store from 'store';

export const useLocalStorageSetState = (initialValue, user) => {
  if (!user) {
    throw new Error('User must be provided to persist to localStorage');
  }
  const actualInitialValue =
    store.get(user) !== undefined ? store.get(user) : initialValue;
  const [value, setValue] = React.useState(actualInitialValue);

  React.useEffect(() => {
    store.set(user, value);
  }, [user, value]);

  return [value, setValue];
};
