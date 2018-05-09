import React, { Component } from 'react';
import './style.css';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="menu">
          <img src="http://themes.startbootstrap.com/vitality-v2.1.0/img/agency/logo.svg" alt="" />

          <ul>
            <li><a href="#">Lorem</a></li>
            <li><a href="#">Ipsum</a></li>
            <li><a href="#">Dolor</a></li>
            <li><a href="#">Consectetur</a></li>
            <li><a href="#">Adipiscing</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
