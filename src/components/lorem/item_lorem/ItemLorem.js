import React, { Component } from 'react';
import './style.css';

class ItemLorem extends Component {


  render() {

    const p = this.props;

    if (p.type) {
      return (
        <div className="lorem" id={p.id}>
          {texto(p.icon, p.topico, p.titulo, p.texto)}
          {imagem(p.imagem)}
        </div>
      );
    } else {
      return (
        <div className="lorem" id={p.id}>
          {imagem(p.imagem)}
          {texto(p.icon, p.topico, p.titulo, p.texto)}
        </div>
      );
    }
  }

}


let texto = (icon, topico, titulo, texto) => {
  return (
    <div className="item_lorem">

      <div className="item_icon">
        <img src={icon} />
      </div>
      <h3>{topico}</h3>
      <h4>{titulo}</h4>
      <p>{texto}</p>

    </div>
  );
}

let imagem = (img) => {
  return (
    <div className="imagem">
      <img src={img} />
    </div>
  );
}

export default ItemLorem;
