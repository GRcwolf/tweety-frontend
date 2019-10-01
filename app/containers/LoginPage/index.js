import React from 'react';
import { Button, Icon, Row, TextInput } from 'react-materialize';
import PropTypes from 'prop-types';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logInUser } from 'containers/App/actions';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectUserIsAurhenticated } from 'containers/App/selectors';
import reducer from './reducer';
import { makeSelectPassword, makeSelectLoginName } from './selectors';
import { changeLoginData } from './actions';
import saga from './saga';

const key = 'loginPage';

const LoginPage = ({
  loginName,
  password,
  onChangeLoginData,
  onSubmit,
  userIsLoggedIn,
}) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  if (userIsLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="col s12">
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
  userIsLoggedIn: PropTypes.bool,
  onChangeLoginData: PropTypes.func,
  onSubmit: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loginName: makeSelectLoginName(),
  password: makeSelectPassword(),
  userIsLoggedIn: makeSelectUserIsAurhenticated(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeLoginData: evt =>
      dispatch(changeLoginData(evt.target.name, evt.target.value)),
    onSubmit: evt => {
      evt.preventDefault();
      dispatch(logInUser());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
