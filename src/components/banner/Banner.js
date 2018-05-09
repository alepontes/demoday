import React, { Component } from 'react';
import './style.css';

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <img src="http://themes.startbootstrap.com/vitality-v2.1.0/img/agency/profile.svg" alt="" />
        <h1>Semana Global de Empreedendorismo</h1>
        <h2>Fatec Zona Sul</h2>
      </div>
    );
  }
}

export default Banner;
