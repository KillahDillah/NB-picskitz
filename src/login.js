import React, { Component } from 'react';
import Header from './header';
import arrow from './imgs/slide-icon.png';

class Login extends Component {
  render() {
    return(
      <div className="login">
        <Header/>
        <div className="info-box">
          <form>
          
            <div className="entry-box-login">
              <div className="entry-box">
                <label>Username</label>
                <input type="text" name="username" placeholder="John Doe" />
              </div>
              <div className="entry-box">
                <label>Password</label>
                <input type="password" name="password" placeholder="*****" />
              </div>
              <p>Don't have an account? <a href="#">Sign up here!</a></p>
            </div>
        
                <button type="submit" className="entry-box" id="button-login"><img src={arrow}/></button>
              
          </form>
        </div>
      </div>
    )
  }
}

export default Login