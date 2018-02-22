import React, { Component } from 'react';
import logosmall from './imgs/small-logo-white.png';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return(
      <div className="header">
        <img src={logosmall}/>
          <div className="header-sub">
            <NavLink to="/signup" activeClassName="selected">Signup</NavLink>
            <NavLink to="/login" activeClassName="selected">Login</NavLink>
          </div>
      </div>
      
    )
  }
}

export default Header