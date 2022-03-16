import React, {useContext} from 'react';
import './CardWidget.css';
//Context
import { ProductsContext } from '../../ProductsContext';

const CardWidget = () => {

  const {cantidadItemsCarrito} = useContext(ProductsContext);

  return (
    <div className='LogoCarrito'>
      <i className="fa-solid fa-cart-shopping"></i>
      <h5>: {cantidadItemsCarrito}</h5>
    </div>
  );
};

export default CardWidget;