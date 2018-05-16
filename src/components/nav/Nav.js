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
            <li><a href="#abc">Lorem</a></li>
            <li><a href="#lorem1">Topico 1</a></li>
            <li><a href="#lorem2">Topico 2</a></li>
            <li><a href="#lorem3">Topico 3</a></li>
            <li><a href="#ipsum">Ipsum</a></li>
            <li><a href="#sociais">Ipsum</a></li>
            <li><a href="#sobre">Sobre</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
