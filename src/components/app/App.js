import React, { Component } from 'react';
import './App.css';
import Nav from '../nav/Nav';
import Banner from '../banner/Banner';
import Sobre from '../sobre/Sobre';
import Footer from '../footer/Footer';
import Carousel from '../carousel/Carousel';
import Sociais from '../sociais/Sociais';
import Lorem from '../lorem/Lorem';
import Ipsum from '../ipsum/Ipsum';
// import Palestrantes from '../ipsum/Palestrantes';
import Timer from '../timer/Timer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Banner />
        <Timer />
        <Lorem />
        <Ipsum />
        <Sociais />
        {/* <Palestrantes /> */}
        <Sobre />
        {/* <Carousel /> */}
        <Footer />
      </div>
    );
  }
}

export default App;

/**
 * Timer
 * Menu
 * Formatação
 * PAGINA {
 *  FAQ
 *  PATROCINIO ETC
 *  POSTS
 * } 
 * Colocar imports na ordem
 * background-attachment: fixed; FIXA A FOTO
 */