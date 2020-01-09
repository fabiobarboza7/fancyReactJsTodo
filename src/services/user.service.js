import axios from './api';

export const getUsers = async () => {
  const { data } = await axios.get('/users');
  return data;
};

export const userLogin = async user => {
  const { data } = await axios.post('/sessions', user);
  console.log(data);
  return data;
};
