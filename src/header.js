import React, { Component } from 'react';
import logosmall from './imgs/small-logo-white.png';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return(
      <div className="header">
        <img src={logosmall}/>
          <div className="header-sub">
            <Link to="./signup">Signup</Link>
            <Link to="./login">Login</Link>
          </div>
      </div>
      
    )
  }
}

export default Header