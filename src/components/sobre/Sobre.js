import React, { Component } from 'react';
import Item from './item/Item';
import './style.css'
import img from './img/piratebay.jpg'

class Sobre extends Component {
    render() {
        return (
            <div className="sobre" id="sobre">
                <div className="titulo">
                    <h2>Lorem ipsum pharetra eu suscipit luctus primis</h2>
                    <p> Lorem ipsum pharetra eu suscipit luctus primis 
                       aptent nam elit. id curabitur consectetur phasellus semper porta</p>
                </div>

                <div className="itens"> 
                    <Item img={img} alt="Alt" titulo="Titulo lindão" text="Lorem ipsum pharetra susclipipit luctus primis aptent nam elit. id curabitur consectetur phasellus semper portaLorem ipsum pharetra susclipipit luctus primis aptent nam elit. id curabitur consectetur phasellus semper portaLorem ipsum pharetra susclipipit luctus primis aptent nam elit. id curabitur consectetur phasellus semper porta"/>
                    <Item img={img} alt="Alt" titulo="Titulo lindão" text="Lorem ipsum pharetra susclipipit luctus primis aptent nam elit. id curabitur consectetur phasellus semper portaLorem ipsum pharetra susclipipit luctus primis aptent nam elit. id curabitur consectetur phasellus semper portaLorem ipsum pharetra susclipipit luctus primis aptent nam elit. id curabitur consectetur phasellus semper porta"/>
                    <Item img={img} alt="Alt" titulo="Titulo lindão" text="blablablabla"/>
                </div>

            </div>
        );
    }
}

export default Sobre;
