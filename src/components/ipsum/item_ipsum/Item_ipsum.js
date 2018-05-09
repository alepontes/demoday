import React, { Component } from 'react';
import './style.css';

class Item_ipsum extends Component {

  render() {
    return (
      <div className="celula">

        <img src={this.props.icon} alt={this.props.alt}/>
        <h5>{this.props.titulo}</h5>
        <p>{this.props.desc}</p>

      </div>
    );
  }

}

export default Item_ipsum;
