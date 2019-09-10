import React from 'react';
import { Button, Icon, Row, TextInput } from 'react-materialize';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { makeSelectUserObject } from './selectors';
import { changeUserObject } from './actions';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer from './reducer';

const key = 'signUpPage';

const SignUpPage = props => {
  useInjectReducer({ key, reducer });
  console.log(props);
  return (
    <Row>
      <form onSubmit={console.log('form submit')} className="col s12">
        <Row>
          <TextInput
            onChange={props.onChangeUserObject}
            value={props.firstName}
            name="firstName"
            label="First name"
            class="validate"
            s="6"
          />
          <TextInput
            onChange={props.onChangeUserObject}
            name="lastName"
            value={props.lastName}
            label="Last name"
            class="validate"
            s="6"
          />
        </Row>
        <Row>
          <TextInput
            value={props.userName}
            label="User name"
            class="validate"
            s="12"
          />
        </Row>
        <Row>
          <TextInput label="Password" type="password" class="validate" s="6" />
          <TextInput
            label="Confirm password"
            type="password"
            class="validate"
            s="6"
          />
        </Row>
        <Row>
          <TextInput
            value={props.email}
            label="E-Mail"
            type="email"
            class="validate"
            s="12"
          />
        </Row>
        <Row>
          <Button waves="light">
            Sign up
            <Icon right>check</Icon>
          </Button>
        </Row>
      </form>
    </Row>
  );
};

SignUpPage.propTypes = {
  onChangeUserObject: PropTypes.func,
  firstName: PropTypes.string,
  userName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  userObject: makeSelectUserObject(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeUserObject: evt =>
      dispatch(changeUserObject(evt.target.name, evt.target.value)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpPage);
