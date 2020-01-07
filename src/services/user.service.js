import axios from './api';

export const getUsers = async () => {
  const { data } = await axios.get('/users');
  return data;
};

export const login = async user => {
  const { data } = await axios.post('/users/sign_in', user);
  return data;
};
