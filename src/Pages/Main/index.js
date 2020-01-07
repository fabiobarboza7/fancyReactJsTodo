import React, { useEffect, useState } from 'react';
import { getUsers, login } from '../../services/user.service';
// import { Container } from './styles';

export default function Main() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const data = await getUsers();
      console.log(data);
    }

    loadUsers();
  }, []);

  async function handleLogin() {
    const data = await login({
      email: 'johns@gmail.com',
      password: 123123,
    });

    console.log(data, 9999);
  }

  return (
    <button type="button" onClick={() => handleLogin()}>
      login
    </button>
  );
}
