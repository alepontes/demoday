import React, { Component } from 'react';
import './style.css';

class Sociais extends Component {
  render() {
    return (
      <div className="sociais" id="sociais">
        <div className="conteudo">

          <h3>Para mais <strong>criatividade</strong>, <strong>educação</strong> e <strong>inspiração</strong></h3>
          {/* <h3>Lorem ipsum <strong>dolor</strong> sit amet, consectetur <strong>adipiscing</strong> elit</h3> */}
          {/* <h3>Ser empreendedor significa, acima de tudo, ser um  <strong>realizador </strong> que produz novas  <strong>ideias </strong> através da congruência entre  <strong>criatividade </strong> e  <strong>imaginação </strong></h3> */}


          {/* <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat
          </p> */}

          <a href="#" className="socialBtn">Acesse nosso Facebook</a>
        </div>
      </div>
    );
  }
}

export default Sociais;
