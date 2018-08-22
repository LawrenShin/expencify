import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>Expencify</h1>
    <NavLink to="/create" activeClassName="is-active">To create page</NavLink>
    <NavLink to="/edit" activeClassName="is-active">To edit page</NavLink>
    <NavLink to="/help" activeClassName="is-active">To help page</NavLink>
    <NavLink to="/" activeClassName="is-active">Back home</NavLink>
  </div>
);

export default Header;