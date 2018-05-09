import React, { Component } from 'react';
import './style.css'

class Item extends Component {

    render() {
        return (
            <div className="item">
                <img src={this.props.img} alt={this.props.alt} />
                <h3>{this.props.titulo}</h3>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default Item;
