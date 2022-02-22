import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductsContext = createContext();


export const ProductsProvider = ({children}) => {
    
    const [products, setProducts] = useState([]);
/*     const [isLoading, setIsLoading] = useState(true); */

    const [initial, setInitial] = useState(1);
    
    const [carrito, setCarrito] = useState([]);
    
    useEffect(() => {
        axios(`${process.env.REACT_APP_BASE_URL}products`).then((res) => setProducts(res.data));
/*         setTimeout(() => {
            setIsLoading(false);
        }, 1000); */
    }, []);

    const onAdd = () => {
        setInitial(initial + 1);
    }

    const onRemove = () => {
        setInitial(initial - 1);
    }

    const deleteProduct = (carritoId) => {
        const eliminar = carrito.filter((carro) => 
            carro.id !== carritoId
        )
        setCarrito(eliminar)
    }

    const addToCart = (productId) => {
        const chequearProducto = products.find((carro) => 
            carro.id === productId
        )
        if (chequearProducto){
            if(carrito.includes( chequearProducto )){
                console.log("Esta en el if dentro del if")
                chequearProducto.cantidad = initial
            }
            else{
                carrito.push(chequearProducto, chequearProducto.cantidad = initial)
                console.log("else")
            }
        }

        setCarrito([...carrito])
    }
    
    console.log("carrito:", carrito)
    return(
        <ProductsContext.Provider value={{products, initial, onAdd, onRemove, addToCart, deleteProduct, carrito}}>
            {children}
        </ProductsContext.Provider>
    )
}