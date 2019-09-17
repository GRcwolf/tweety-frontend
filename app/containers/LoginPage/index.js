import React from 'react';
import { Button, Icon, Row, TextInput } from 'react-materialize';
import PropTypes from 'prop-types';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import reducer from './reducer';
import { makeSelectPassword, makeSelectLoginName } from './selectors';
import { changeLoginData } from './actions';

const key = 'loginPage';

const LoginPage = ({ loginName, password, onChangeLoginData }) => {
  useInjectReducer({ key, reducer });

  return (
    <div>
      <form onSubmit={console.log('submit')} className="col s12">
        <Row>
          <TextInput
            s="12"
            value={loginName}
            onChange={onChangeLoginData}
            label="Username/E-Mail"
            name="loginName"
            validate
          />
        </Row>
        <Row>
          <TextInput
            s="12"
            label="Password"
            name="password"
            value={password}
            onChange={onChangeLoginData}
            type="password"
            validate
          />
        </Row>
        <Row>
          <Button s="6" type="submit" name="submit" waves="light">
            Log In
            <Icon right>send</Icon>
          </Button>
        </Row>
      </form>
    </div>
  );
};

LoginPage.propTypes = {
  loginName: PropTypes.string,
  password: PropTypes.string,
  onChangeLoginData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loginName: makeSelectLoginName(),
  password: makeSelectPassword(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeLoginData: evt =>
      dispatch(changeLoginData(evt.target.name, evt.target.value)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
