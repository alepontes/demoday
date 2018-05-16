import React, { Component } from 'react';
import './style.css';

class Nav extends Component {

  componentWillMount(){
    this.setState({bg: "trans"})
  }

  componentDidMount(){
    window.onscroll = this.handleScroll;
  }

  componentWillUnmount(){
    window.onscroll = null;
  }


  handleScroll = () => {
    console.log(this);
    if(window.scrollY < 3 ){
      this.setState({bg: "trans"})
    }
    else{
      this.setState({bg: "solid"})
    }
  }

  render() {
    return (
      <div className="nav">
        <div className="menu" id={this.state.bg}>
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
