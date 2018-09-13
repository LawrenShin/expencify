import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>Expencify</h1>
    <NavLink to="/create" activeClassName="is-active">To create page</NavLink>
    <NavLink to="/help" activeClassName="is-active">To help page</NavLink>
    <NavLink to="/dashboard" activeClassName="is-active">Dashboard page</NavLink>    
    <NavLink exact to="/" activeClassName="is-active">Root</NavLink>
  </div>
);

export default Header;