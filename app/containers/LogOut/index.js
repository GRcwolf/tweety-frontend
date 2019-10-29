import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { logOut } from 'containers/App/actions';
import { makeSelectUserIsAurhenticated } from 'containers/App/selectors';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { destroySession } from './actions';
import reducer from './reducer';
import saga from './saga';

const key = 'logOut';

const LogOut = ({ onLogout, onSessionDestroy, userIsLoggedIn }) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    onSessionDestroy();
    onLogout();
  });

  if (!userIsLoggedIn) {
    return <Redirect to="/login" />;
  }
  return '';
};

LogOut.propTypes = {
  onLogout: PropTypes.func,
  userIsLoggedIn: PropTypes.bool,
  onSessionDestroy: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  userIsLoggedIn: makeSelectUserIsAurhenticated(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLogout: () => dispatch(logOut()),
    onSessionDestroy: () => dispatch(destroySession()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogOut);
