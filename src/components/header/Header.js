import React from 'react';
import { NavLink } from 'react-router-dom';
import {startLogout} from '../../actions/auth'; 
import { connect } from 'react-redux';

const Header = ({startLogout}) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <div className="header__content">
          <NavLink className="header__title" to="/dashboard" activeClassName="is-active">
            <h1>Expencify</h1>
          </NavLink>
          <NavLink className="header__title" to="/weather" activeClassName="is-active">
            <h1 className="weathersify">Weathersify</h1>
          </NavLink>
        </div>
        <button className="button button--link" onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchProps)(Header);