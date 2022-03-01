import React, {useContext} from 'react';
import {ProductsContext} from '../../ProductsContext'
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = () => {

  const {carrito, deleteProduct} = useContext(ProductsContext)

  return (
    <div className='Carrito'>
      {carrito.map((productoCarrito, idx) => {
        return(
          <div key={idx} className='ProductoCarrito'>
            <img src={productoCarrito.img} alt='imagen-producto'/>
              <h3>Producto: {productoCarrito.producto}</h3>
            <div className='PrecioProducto'>
              <h4>Precio: ${productoCarrito.cantidad * productoCarrito.precio}</h4>
              <p>Cantidad: {productoCarrito.cantidad} unidades</p>
              <button onClick={() => deleteProduct(productoCarrito.id)}>Eliminar producto</button>
            </div>
          </div>
        )
      })}
        {carrito.length === 0 ? 
        <><h1>¡No hay productos en el carrito!</h1>
        <Link to='/'><h2>Agregar productos</h2></Link>
        </> : 
        <Link to='/checkout'>
        <button>Terminar mi compra</button>
        </Link>}
    </div>
  )
}

export default Cart