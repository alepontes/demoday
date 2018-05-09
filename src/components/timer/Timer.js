import React, { Component } from 'react';
import './style.css';
import ItemTimer from './item_timer/ItemTimer'

class Timer extends Component {
    render() {
        return (
            <div className="timer">


                <h3>Contagem Regressiva</h3>


                <div className="itens_timer">
                    <ItemTimer
                        num="5"
                        desc="Mêses"
                    />
                    <ItemTimer
                        num="4"
                        desc="Semanas"
                    />
                    <ItemTimer
                        num="17"
                        desc="Dias"
                    />
                    <ItemTimer
                        num="22"
                        desc="Horas"
                    />

                    <ItemTimer
                        num="51"
                        desc="Minutos"
                    />
                    <ItemTimer
                        num="43"
                        desc="Segundos"
                    />
                </div>


                {/* <div className="cont">

                    <div className="mes">
                        <a>Mêses</a>
                        <p>5</p>
                    </div>

                    <div className="semana">
                        <a>Semanas</a>
                        <p>2</p>
                    </div>

                    <div className="dia">
                        <a>Dias</a>
                        <p>12</p>
                    </div>


                    <div className="horas">
                        <a>Horas</a>
                        <p>12</p>
                    </div>


                    <div className="minutos">
                        <a>Minutos</a>
                        <p>12</p>
                    </div>


                    <div className="segundos">
                        <a>Segundos</a>
                        <p>12</p>
                    </div>

                </div> */}

                {/* 
                    **Entrada: Dia e hr de inicio
                    Meses 
                    Semanas 
                    Dias 
                    Horas
                    Minutos
                    Segundos
                */}

            </div>
        );
    }
}

export default Timer;
