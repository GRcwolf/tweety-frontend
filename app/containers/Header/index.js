import React from 'react';
import { Dropdown, Navbar } from 'react-materialize';
import { Link } from 'react-router-dom';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer from './reducer';

const key = 'header';

const Header = ({ logedInUser }) => {
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
          <Link to="/login">Log in</Link>
          <Link to="/sign-up">Sign up</Link>
        </Dropdown>
      </Navbar>
    </header>
  );
};

function buildMenu() {

}

export default Header;
