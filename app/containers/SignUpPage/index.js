import React from 'react';
import { Button, Icon, Row, TextInput } from 'react-materialize';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectConfirmPassword,
  makeSelectEmail,
  makeSelectFirstName,
  makeSelectLastName,
  makeSelectPassword,
  makeSelectUserName,
} from './selectors';
import { changeUserObject } from './actions';
import { signUpUser } from '../App/actions';
import reducer from './reducer';
import saga from './saga';
import { useInjectSaga } from '../../utils/injectSaga';

const key = 'signUpPage';

const SignUpPage = ({
  firstName,
  lastName,
  userName,
  email,
  password,
  confirmPassword,
  onChangeUserObject,
  onFormSubmit,
}) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  return (
    <Row>
      <form onSubmit={onFormSubmit} className="col s12">
        <Row>
          <TextInput
            onChange={onChangeUserObject}
            value={firstName}
            name="firstName"
            label="First name"
            className="validate"
            s={6}
          />
          <TextInput
            onChange={onChangeUserObject}
            name="lastName"
            value={lastName}
            label="Last name"
            className="validate"
            s={6}
          />
        </Row>
        <Row>
          <TextInput
            onChange={onChangeUserObject}
            value={userName}
            label="User name"
            className="validate"
            name="userName"
            s={12}
          />
        </Row>
        <Row>
          <TextInput
            onChange={onChangeUserObject}
            value={password}
            name="password"
            label="Password"
            type="password"
            className="validate"
            s={6}
          />
          <TextInput
            onChange={onChangeUserObject}
            value={confirmPassword}
            name="confirmPassword"
            label="Confirm password"
            type="password"
            className="validate"
            s={6}
          />
        </Row>
        <Row>
          <TextInput
            onChange={onChangeUserObject}
            value={email}
            name="email"
            label="E-Mail"
            type="email"
            className="validate"
            s={12}
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
  onFormSubmit: PropTypes.func,
  firstName: PropTypes.string,
  userName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  userName: makeSelectUserName(),
  firstName: makeSelectFirstName(),
  lastName: makeSelectLastName(),
  email: makeSelectEmail(),
  password: makeSelectPassword(),
  confirmPassword: makeSelectConfirmPassword(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeUserObject: evt =>
      dispatch(changeUserObject(evt.target.name, evt.target.value)),
    onFormSubmit: evt => {
      evt.preventDefault();
      dispatch(signUpUser());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpPage);
