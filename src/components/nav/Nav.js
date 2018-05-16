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
    console.log(num)
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
          <img src="http://themes.startbootstrap.com/vitality-v2.1.0/img/agency/logo.svg" alt="" />

          <ul>
            <li><a onClick={() => this.scroll_page(0)}>Lorem</a></li>
            <li><a onClick={() => this.scroll_page(910)}>Topico 1</a></li>
            <li><a onClick={() => this.scroll_page(1618)}>Topico 2</a></li>
            <li><a onClick={() => this.scroll_page(2208)}>Topico 3</a></li>
            <li><a onClick={() => this.scroll_page(2879)}>Ipsum</a></li>
            <li><a onClick={() => this.scroll_page(3538)}>Ipsum</a></li>
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
