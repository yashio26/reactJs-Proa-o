import React, {useContext} from 'react';
import LogoCarrito from '../../images/logoCarrito.jpg';
import './CardWidget.css';
import { ProductsContext } from '../../ProductsContext';

const CardWidget = () => {

  const {initial} = useContext(ProductsContext);

  return (
    <div className='LogoCarrito'>
      <img src={LogoCarrito} alt='logo-carrito-compras' className='LogoCarrito'/>
      <h5>: {initial}</h5>
    </div>
  );
};

export default CardWidget;