import React, {createContext, useState, useEffect} from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [products, setProducts] = useState({})
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        axios(`${process.env.REACT_APP_BASE_URL}products/`).then((res) => setProducts(res.data));
    }, []);
    

    console.log(products)
    console.log(carts)

    const agregarAlCarrito = (cartId) => {
        /* const revisarProducto = products.find((cart) => 
        cart.id === cartId
        ); */

/*         if (revisarProducto){
            revisarProducto.initial += 1;
        }
        else{
            carts.push({products})
        } */
        console.log(cartId)
        const agregarProducto = products.find(
            (product) => product.id === cartId
        )
        console.log(agregarProducto);
        return(
            carts.push(agregarProducto)   
        )

/*          if (agregarProducto){
            agregarProducto.initial += 1;
            console.log(agregarProducto)
        }
        else{
            carts.push([agregarProducto])
            console.log(agregarProducto)
        }  */

/*         setCarts([...carts]); */
/*         console.log(carts) */
    }

    return(
        <CartContext.Provider value={{carts, agregarAlCarrito}}>{children}</CartContext.Provider>
    );
}