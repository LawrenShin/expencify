import React from 'react';
import { Link } from 'react-router-dom';
import {startLogout} from '../../actions/auth'; 
import { connect } from 'react-redux';

const Header = ({startLogout}) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard" activeClassName="is-active">
          <h1>Expencify</h1>
        </Link>
        <button className="button button--link" onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchProps)(Header);