import React from 'react';
import { Row, TextInput, Button, Icon } from 'react-materialize';

export default function LoginPage() {
  return (
    <>
      <form>
        <Row class="col s12">
          <TextInput label="Usernname" />
        </Row>
        <Row class="col s12">
          <TextInput label="Password" type="password" />
        </Row>
        <Row class="col s6">
          <Button type="submit" waves="light">
            Log In
            <Icon right>send</Icon>
          </Button>
        </Row>
      </form>
    </>
  );
}
