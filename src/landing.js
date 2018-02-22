import React, { Component } from 'react';
import large from './imgs/large-logo-white.png';
import {withRouter} from 'react-router-dom';

class Landing extends Component {
  componentDidMount(){
    setTimeout(()=>{
      this.props.history.push('/login')
    },1000)
  }

  render() {
    return (
      <div className="landingpage">
        <img src={large} className="largelogo"/>
      </div>
      )
  }
}

export default withRouter(Landing) //attach router to props