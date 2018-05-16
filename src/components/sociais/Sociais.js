import React, { Component } from 'react';
import './style.css';

class Sociais extends Component {
  render() {
    return (
      <div className="sociais" id="sociais">
        <div className="conteudo">
          <h3>Lorem ipsum <strong>dolor</strong> sit amet, consectetur <strong>adipiscing</strong> elit</h3>

          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat
          </p>
          <a href="#" className="socialBtn">Ir para o Facebook</a>
        </div>
      </div>
    );
  }
}

export default Sociais;
