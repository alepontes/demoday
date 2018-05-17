import React, { Component } from 'react';
import './style.css';
import Ipsum from '../ipsum/Ipsum';
import Sociais from '../sociais/Sociais';

class Nav extends Component {

  componentWillMount() {
    this.setState({ bg: "trans" })
  }

  componentDidMount() {
    window.onscroll = this.handleScroll;
  }

  componentWillUnmount() {
    window.onscroll = null;
  }


  scroll_page = (num) => {
    window.scrollTo({ behavior: 'smooth', top: num });
  }


  handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY < 3) {
      this.setState({ bg: "trans" })
    }
    else {
      this.setState({ bg: "solid" })
    }
  }

  render() {
    return (
      <div className="nav">
        <div className="menu" id={this.state.bg}>
          {/* <img src="http://themes.startbootstrap.com/vitality-v2.1.0/img/agency/logo.svg" alt="" /> */}

          <ul>
            <li><a onClick={() => this.scroll_page(0)}>Olá</a></li>
            <li><a onClick={() => this.scroll_page(775)}>Empreenda</a></li>
            <li><a onClick={() => this.scroll_page(1776)}>Veja</a></li>
            <li><a onClick={() => this.scroll_page(2638)}>Viva</a></li>
            <li><a onClick={() => this.scroll_page(3538)}>Patrocíne</a></li>
            <li><a onClick={() => this.scroll_page(4291)}>Sobre</a></li>
          </ul>
        </div>
      </div>
    );
  }
}


// href="#lorem1"
// href="#lorem2"
// href="#lorem3"
// href="#ipsum"
// href="#Sociais"
// href="#sobre"


export default Nav;
