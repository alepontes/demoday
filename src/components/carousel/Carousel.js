import React, { Component } from 'react';
import './style.css';
import Carousell from 'nuka-carousel';
// var Carousel = require('nuka-carousel');


class Carousel extends Component {
    render() {
        return (
            <div className="carousel">
                <Carousell>
                   <img id="abc" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
                    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
                    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" /> 
                </Carousell>
                
            </div>
        );
    }
}

export default Carousel;


/**
 * slidesToShow={3} Quantos aparecem ao msm tempo
 * cellAlign="center" Alinhamento no começo
 * dragging={false} Desabilita botão quanto não exisir slider proximo
 * slidesToScroll={3} Quatas slider passam por cada NEXT
 * slideWidth={"800px"} Tamanho do slider
 * speed={500} Velocidade da trancisão
 */