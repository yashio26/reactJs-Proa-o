import React from 'react';
import CardComponent from './CardComponent/CardComponent';
import JakePark from "../images/jakePark.png"
import JakeParkSkin from "../images/jakeParkSkin.png"
import ItemCount from './ItemCount';
import "./ItemListContainer.css";

const ItemListContainer = () => {
  return (
    <div className="Articulos">
        <div className='Articulo'>
          <CardComponent
            name="Jake Park"
            description="Chaqueta verde"
            img={JakePark}
            />
          <ItemCount 
          stock="1"
          />
        </div>
        <div className='Articulo'>
          <CardComponent 
            name="Jake Saqueador de Vigo"
            description="Chaqueta verde"
            img={JakeParkSkin}
            />
          <ItemCount 
          stock="0"
          />
        </div>
        <div className='Articulo'>
          <CardComponent 
            name="Celulas auricas"
            description="1000 celulas auricas"
            img={JakePark}
          />
          <ItemCount 
          stock="14"
          />
        </div>
      </div>
  );
};

export default ItemListContainer;
