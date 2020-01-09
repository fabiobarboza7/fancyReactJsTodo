import React from 'react';
import { Form, Input } from '@rocketseat/unform';
// import { Container } from './styles';

export default function SignUp() {
  function handleSubmit() {}

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="email" type="email" />
      <Input name="password" type="password" />
      <button type="submit">enviar</button>
    </Form>
  );
}
