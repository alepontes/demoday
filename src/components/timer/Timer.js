import React, { Component } from 'react';
import './style.css';
import ItemTimer from './item_timer/ItemTimer'

class Timer extends Component {

    componentWillMount() {

        this.setState({ meses: 0 })
        this.setState({ semanas: 0 })
        this.setState({ dias: 0 })
        this.setState({ horas: 0 })
        this.setState({ minutos: 0 })
        this.setState({ segundos: 0 })

    }

    componentDidMount = () => {

        let data_prevista = new Date("november 17, 2018").getTime();
        let segundos;

        setInterval(() => {

            let data_atual = new Date().getTime();
            let segundos_a = (data_prevista - data_atual) / 1000;

            this.setState({ meses: parseInt(segundos_a / 2592000) });
            segundos_a = segundos_a % 2592000;

            this.setState({ semanas: parseInt(segundos_a / 604800) });
            segundos_a = segundos_a % 604800;

            this.setState({ dias: parseInt(segundos_a / 86400) });
            segundos_a = segundos_a % 86400;


            this.setState({ horas: parseInt(segundos_a / 3600) });
            segundos_a = segundos_a % 3600;

            this.setState({ minutos: parseInt(segundos_a / 60) });
            this.setState({ segundos: segundos = parseInt(segundos_a % 60) });
            // segundos = parseInt(segundos_a % 60)


            // console.log(segundos)

            // document.getElementById('mes').innerHTML = meses
            // document.getElementById('dia').innerHTML = dias;
            // document.getElementById('hora').innerHTML = horas;
            // document.getElementById('minuto').innerHTML = minutos;
            // document.getElementById('segundo').innerHTML = segundos;


        }, 1000)

    }

    render() {
        return (
            <div className="timer">


                <h3>Contagem Regressiva</h3>

                <div className="itens_timer">
                    <ItemTimer
                        num={this.state.meses}
                        desc="Mêses"
                    />
                    <ItemTimer
                        num={this.state.semanas}
                        desc="Semanas"
                    />
                    <ItemTimer
                        num={this.state.dias}
                        desc="Dias"
                    />
                    <ItemTimer
                        num={this.state.horas}
                        desc="Horas"
                    />

                    <ItemTimer
                        num={this.state.minutos}
                        desc="Minutos"
                    />
                    <ItemTimer
                        num={this.state.segundos}
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
