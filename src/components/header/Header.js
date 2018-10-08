import React from 'react';
import { NavLink } from 'react-router-dom';
import {startLogout} from '../../actions/auth'; 
import { connect } from 'react-redux';

const Header = ({startLogout}) => (
  <div>
    <h1>Expencify</h1>
    <NavLink to="/create" activeClassName="is-active">To create page</NavLink>
    <NavLink to="/dashboard" activeClassName="is-active">Dashboard page</NavLink>
    <button onClick={startLogout}>Logout</button>
  </div>
);

const mapDispatchProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchProps)(Header);