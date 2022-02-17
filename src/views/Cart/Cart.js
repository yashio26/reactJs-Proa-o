import React, {useContext} from 'react'
import { CartContext } from '../../CartContext'


const Cart = ({agregarAlCarrito}) => {

const {carts} = useContext(CartContext);
console.log (carts)
  return (
    <div>
      <h1>hola</h1>
      {carts.map((cart) => {
        return(
          <div key={cart.id}>
            <h4>{cart.title}</h4>
            <p>Cantidad: {} Precio: ${cart.price}</p>
          </div>
        )
      })}
      <h1>{carts.title}</h1>
    </div>
  )
}

export default Cart