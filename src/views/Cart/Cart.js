import React, {useContext} from 'react';
import './Cart.css';
//Context
import {ProductsContext} from '../../ProductsContext';
//React-Router-Dom
import { Link } from 'react-router-dom';

const Cart = () => {

  const {carrito, deleteProduct, pagoFinal, removeProducts} = useContext(ProductsContext);

  return (
    <div className='Carrito'>
      <h1 className='Titulo'>Carrito</h1>
      {carrito.map((productoCarrito, idx) => {
        return(
          <div key={idx} className='ProductoCarrito'>
            <img src={productoCarrito.img} alt='imagen-producto'/>
              <h3>{productoCarrito.producto}</h3>
            <div className='PrecioProducto'>
              <h4>Precio: ${productoCarrito.cantidad * productoCarrito.precio}</h4>
              <p>Cantidad: {productoCarrito.cantidad} unidades</p>
              <button onClick={() => deleteProduct(productoCarrito.id)}>Eliminar producto</button>
            </div>
          </div>
        )
      })}
        {carrito.length === 0 ? 
        <>
          <h2>¡No hay productos en el carrito!</h2>
          <img src='https://firebasestorage.googleapis.com/v0/b/dbd-latino.appspot.com/o/dbd-game.gif?alt=media&token=af15ede5-92da-4dd6-815a-bba017f095b0' alt='Logo-Dead-By-Daylight'/>
          <Link to='/' className='Link'>
            <h2>Agregar productos</h2>
          </Link>
        </> : 
        <div className='BotonesGestionCarrito'>
          <Link to='/'>
            <button>Agregar más productos</button>
          </Link>
          <Link to='/checkout'>
            <button id='BotonTerminarMiCompra'>Terminar mi compra</button>
          </Link>
          <div className='PrecioTotalCarrito'>
            <h4>Precio total: ${pagoFinal}</h4>
            <button id='BotonVaciarCarrito' onClick={() => removeProducts()}>Vaciar el carrito</button>
          </div>
        </div>}
    </div>
  )
}

export default Cart;