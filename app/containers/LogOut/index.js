import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { logOut } from 'containers/App/actions';
import { makeSelectUserIsAurhenticated } from 'containers/App/selectors';

const LogOut = ({ onLogout, userIsLoggedIn }) => {
  if (!userIsLoggedIn) {
    return <Redirect to="/login" />;
  }
  onLogout();
  return '';
};

LogOut.propTypes = {
  onLogout: PropTypes.func,
  userIsLoggedIn: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  userIsLoggedIn: makeSelectUserIsAurhenticated(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLogout: () => dispatch(logOut()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogOut);
