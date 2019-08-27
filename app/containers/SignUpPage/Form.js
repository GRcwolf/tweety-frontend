import React from 'react';

import { TextInput, Button, Icon } from 'react-materialize';

const SignUpForm = () => (
  <form onSubmit={console.log('form submit')}>
    <TextInput label="First name" class="validate" />
    <TextInput label="Second name" class="validate" />
    <TextInput label="User name" class="validate" />
    <TextInput label="Password" type="password" class="validate" />
    <TextInput label="Confirm password" type="password" class="validate" />
    <TextInput label="E-Mail" type="email" class="validate" />
    <Button waves="light">
      Sign up
      <Icon right>check</Icon>
    </Button>
  </form>
);

export default SignUpForm;
