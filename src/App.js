import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TransitionGroup from "react-transition-group/TransitionGroup";
import Login from './login';
import Signup from './signup';
import Landing from './landing';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" children={({ match, ...rest }) => (
              <TransitionGroup component={firstChild}>
                {match && <Landing {...rest} />}
              </TransitionGroup> 
               /*component={Landing} />*/
            <Route path="/login" children={({ match, ...rest }) => (
              <TransitionGroup component={firstChild}>
                {match && <Login {...rest} />}
              </TransitionGroup>
              )}/> /*component={Login}/> */
            <Route path="/signup" children={({ match, ...rest }) => (
              <TransitionGroup component={firstChild}>
                {match && <Signup {...rest} />}
              </TransitionGroup> 
              )}/>/* component={Signup} /> */
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
