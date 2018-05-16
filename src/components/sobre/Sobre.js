import React, { Component } from 'react';
import Item from './item/Item';
import './style.css'
import capacitar from './img/capacitar.png'
import conectar from './img/conectar.png'
import inspirar from './img/inspirar.png'

class Sobre extends Component {
    render() {
        return (
            <div className="sobre" id="sobre">
                <div className="titulo">
                    <h2>Empreendedorismo</h2>
                    <p> A Semana Global de Empreendedorismo foi criada em 2007 pelo ex-primeiro ministro
                         britânico Gordon Brown e pelo presidente da Kauffman Foundation na época, Carl
                         Schramm com o objetivo de fortalecer e disseminar a cultura empreendedora,
                         conectando, capacitando e inspirando as pessoas a empreender.</p>
                </div>

                <div className="itens">
                    <Item img={capacitar} alt="Alt" titulo="Capacitar"
                        text="Auxiliar os participantes por meio de oportunidades de capacitação" />

                    <Item img={conectar} alt="Alt" titulo="Conectar"
                        text="Conectar instituições e pessoas que fomentem um ambiente empreendedor, no Brasil e no mundo." />

                    <Item img={inspirar} alt="Alt" titulo="Inspirar"
                        text="Levar histórias e lições aprendidas por empreendedores para o maior número de brasileiros." />


                </div>

            </div>
        );
    }
}

export default Sobre;
