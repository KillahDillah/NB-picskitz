import React, { Component } from 'react';
import Header from './header';
import arrow from './imgs/slide-icon.png';

class Signup extends Component {
  render() {
    return(
      <div>
        <Header/>
        <div className="info-box">
          <form>
            <div className="entry-box">
              <label>Username</label>
              <input type="text" name="username" placeholder="John Doe" />
            </div>
            <div className="entry-box">
              <label>Email</label>
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="entry-box">
              <label>Birthday</label>
              <input type="text" name="bday" placeholder="09/09/1989" />
            </div>
            <div className="entry-box">
              <label>Address</label>
              <input type="text" name="address" placeholder="497 Evergreen Rd. Roseville..." />
            </div>
            <div className="entry-box">
              <label>Password</label>
              <input type="password" name="password" placeholder="*****" />
            </div>
            
              <button type="submit" className="entry-box" id="button-signup"><img src={arrow}/></button>
            
          </form>
        </div>
      </div>
    )
  }
}

export default Signup