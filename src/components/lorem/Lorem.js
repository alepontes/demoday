import React, { Component } from 'react';
import './style.css';
import ItemLorem from './item_lorem/ItemLorem'

class Lorem extends Component {

  render() {

    return (

      <div>       
        <ItemLorem 
          type={false} 
          id="lorem1"
          imagem="http://www.stackoverflowbusiness.com/hubfs/B2B-SO/Sales/Images/Home/Educate-BuildAwareness.svg?t=1525446690975" 
          icon="https://www.stackoverflowbusiness.com/hubfs/B2B-SO/Sales/Images/Home/Educate.svg?t=1525446690975" 
          topico="Capacitar" 
          titulo="" 
          texto=" A SGE é um movimento global presente em mais de 160 países que reúne as pessoas para falar
           do empreendedorismo como motor para o desenvolvimento econômico e social. Pouco se sabe sobre o 
           futuro do nosso planeta, mas tudo indica que ele será moldado por aqueles que empreendem.
          ntre os dias 13 e 19 de novembro, todas as pessoas que também acreditam nessa causa se conectam 
          em eventos, workshops, atividades e debates para encontrar maneiras práticas e viáveis de
           transformar o Brasil por meio do empreendedorismo. Podem ser iniciativas isoladas ou grandes 
           coletivos, cada um em um lugar diferente do país — das capitais ao interior — promovendo e
            engajando a comunidade local para construirmos cidades mais empreendedoras."/>


        <ItemLorem 
          type={true} 
          id="lorem3"
          imagem="http://www.stackoverflowbusiness.com/hubfs/B2B-SO/Sales/Images/Home/Educate-BuildAwareness.svg?t=1525446690975" 
          icon="https://www.stackoverflowbusiness.com/hubfs/B2B-SO/Sales/Images/Home/Educate.svg?t=1525446690975" 
          topico="Conectar" 
          titulo="" 
          texto=" 
          Esse movimento Global busca fortalecer a capacidade empreendedora dos mais de 130
          países participantes com a missão de motivar e fomentar o empreendedorismo, a ideia
          do movimento é capacitar as pessoas dando oportunidades aos participantes, conectá-los
          às instituições, inspirar as pessoas com histórias e lições dos empreendedores que conseguiram
          chegar ao sucesso e mostrar que com força de vontade e determinação podemos mudar o mundo."
        />
        
      </div>
    );

  }
}


export default Lorem;
