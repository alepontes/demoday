import React, { Component } from 'react';
import './style.css';
import ItemIpsum from './item_ipsum/Item_ipsum'
import board from './img/board.png';
import customer from './img/customer.png';
import lecture from './img/lecture.png';

class Ipsum extends Component {

  render() {
    return (
      <div className="ipsum" id="ipsum">

        <a className="ipsum_icon"></a>
        <img src="https://www.stackoverflowbusiness.com/hubfs/B2B-SO/Sales/Images/Home/Worlds.svg?t=1525369981377" className="ipsum_icon" />
        <h3>Patrocíne o evento</h3>
        <p>Você vai encontrar o Calendário de Atividades do mês e pode filtrar por formato de evento, 
          data ou cidade. As atividades variam de competições de grande porte a encontros de redes menores,
           como oportunidades para conectar participantes a potenciais colaboradores, mentores e até mesmo 
           investidores, inspirando o debate e abrindo novas oportunidades de networking.</p>

        <div className="infos">
          <ItemIpsum
            icon={board}
            alt="Icone"
            titulo="Palestras"
            desc=""
          />

          <ItemIpsum
            icon={customer}
            alt="Icone"
            titulo="Projetos Sociais"
            desc=""
          />

          <ItemIpsum
            icon={lecture}
            alt="Icone"
            titulo="Workshops"
            desc=""
          />
        </div>

        {/* <a className="ipsumBtn">Botão Aqui</a> */}

      </div>
    );
  }
}

export default Ipsum;
