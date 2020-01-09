import React, { useState, useContext, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { userLogin } from '../../services/user.service';
import { Store } from '../../store';
import { signInRequest } from '../../store/modules/user/actions';
import history from '../../services/history';
// import { Container } from './styles';

export default function SignIn() {
  const [state, dispatch] = useContext(Store);
  const [user, setUser] = useState(false);

  useEffect(() => {
    setUser(state.user);

    if (user && user.signed) {
      localStorage.setItem('user', JSON.stringify(user));
      history.push('/');
    }
  }, [state.user, user]);

  async function handleSubmit(userData) {
    const data = await userLogin(userData);
    dispatch(signInRequest(data));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="email" type="email" />
      <Input name="password" type="password" />
      <button type="submit">enviar</button>
    </Form>
  );
}
