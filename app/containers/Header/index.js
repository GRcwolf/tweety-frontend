import React from 'react';
import { NavItem, Navbar } from 'react-materialize';

const Header = () => (
  <header>
    <Navbar alignLinks="right">
      <NavItem href="">Getting started</NavItem>
      <NavItem href="components.html">Components</NavItem>
    </Navbar>
  </header>
);

export default Header;
