import React, { createContext, useState, useEffect, useCallback } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from './firebase/firebaseConfig';

export const ProductsContext = createContext();


export const ProductsProvider = ({children}) => {
    
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [initial, setInitial] = useState(1);
    
    let [carrito, setCarrito] = useState([]);

    const [pagoFinal, setPagoFinal] = useState(0);

    const [cantidadItemsCarrito, setCantidadItemsCarrito] = useState(0);
    
    useEffect(() => {
        const obtenerProductos = async () => {
            const docs = [];
            const q = query(collection(db, "tienda"));
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            })
            setProducts(docs);
        };
        obtenerProductos();
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
        if(localStorage.getItem('carrito')){
            setCarrito(JSON.parse(localStorage.getItem('carrito')))
        }
    }, [])

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
        localStorage.setItem('carrito', JSON.stringify(eliminar));
    }

    const removeProducts = () => {
        setCarrito([]);
        localStorage.setItem('carrito', JSON.stringify([]));
    }

    const addToCart = (productId) => {
        const chequearProducto = products.find((carro) => 
            carro.id === productId
        )
        if (chequearProducto){
            if(carrito.includes( chequearProducto )){
                chequearProducto.cantidad = initial;
            }
            else{
                chequearProducto.cantidad = initial
                carrito.push(chequearProducto)
            }
        }
        setInitial(1)
        setCarrito([...carrito])
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    const calculoPagoFinal = useCallback(() =>{
        const totalPorProducto = [];

        carrito.map((carro) => {
            const precioTotalProducto = carro.precio * carro.cantidad;
            return totalPorProducto.push(precioTotalProducto)
        })

        let precioCarrito = 0;

        for (let i=0; i<totalPorProducto.length; i++){
            precioCarrito = precioCarrito + parseInt(totalPorProducto[i]);
        }
        setPagoFinal(precioCarrito);
    }, [carrito])

    useEffect(() => {
        calculoPagoFinal();
    }, [calculoPagoFinal]);

    const cantidadCarrito = useCallback(() =>{
        const cantidadPorProducto = [];

        carrito.map((carro) => {
            const cantidadTotalProducto = carro.cantidad;
            return cantidadPorProducto.push(cantidadTotalProducto)
        })

        let cantidadTotalCarrito = 0;

        for (let i=0; i<cantidadPorProducto.length; i++){
            cantidadTotalCarrito = cantidadTotalCarrito + parseInt(cantidadPorProducto[i]);
        }
        setCantidadItemsCarrito(cantidadTotalCarrito);
    }, [carrito])

    useEffect(() => {
        cantidadCarrito();
    }, [cantidadCarrito]);

    return(
        <ProductsContext.Provider value={{products, initial, onAdd, onRemove, addToCart, deleteProduct, carrito, setCarrito, pagoFinal, cantidadItemsCarrito, isLoading, removeProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}