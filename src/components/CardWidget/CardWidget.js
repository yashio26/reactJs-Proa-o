import React from 'react';
import LogoCarrito from '../../images/logoCarrito.jpg';
import './CardWidget.css';

const CardWidget = () => {
  return (
  <img src={LogoCarrito} alt='logo-carrito-compras' className='LogoCarrito'/>
  );
};

export default CardWidget;