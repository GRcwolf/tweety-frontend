import React from 'react';
import { Dropdown, Navbar, NavItem } from 'react-materialize';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Navbar alignLinks="right">
      <NavItem href="">Getting started</NavItem>
      <NavItem href="components.html">Components</NavItem>
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

export default Header;
