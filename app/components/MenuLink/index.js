import React from 'react';
import { Link } from 'react-router-dom';

const MenuLink = menuItem => (
  <li>
    <Link to={menuItem.targetLocation}>{menuItem.linkName}</Link>
  </li>
);

export default MenuLink;
