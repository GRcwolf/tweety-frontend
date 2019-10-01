import React from 'react';
import { Dropdown, Navbar } from 'react-materialize';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeSelectUser } from 'containers/App/selectors';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer from './reducer';

const key = 'header';

const Header = ({ user }) => {
  useInjectReducer({ key, reducer });
  return (
    <header>
      <Navbar alignLinks="right">
        <Link to="/">Home</Link>
        <Dropdown
          trigger={
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a href="#">
              <i className="large material-icons">account_circle</i>
            </a>
          }
        >
          {buildUserMenu(user)}
        </Dropdown>
      </Navbar>
    </header>
  );
};

function buildUserMenu(user) {
  if (!user.authenticated) {
    return (
      <>
        <Link to="/login">Log in</Link>
        <Link to="/sign-up">Sign up</Link>
      </>
    );
  }
  return (
    <>
      <Link to="/logout">Log out</Link>
    </>
  );
}

Header.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

export default connect(mapStateToProps)(Header);
