import React, { Component } from 'react';
import './style.css';

class ItemTimer extends Component {
    render() {
        return (

            <div className="cont">

                <div className="cont_sub">
                    <p id="numero">{this.props.num}</p>
                    <p id="item_timer_titulo">{this.props.desc}</p>
                </div>

            </div>

        );
    }
}

export default ItemTimer;
