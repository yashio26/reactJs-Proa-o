import React/* , { useState } */ from 'react';
import './ItemCount.css';
import { Link } from 'react-router-dom';


const ItemCount = ({stock, initial, onAdd, onRemove, addToCart, detail}) => {

/*     const [initial, setInitial] = useState(1);

    function onAdd() {
        setInitial(initial + 1);
    } */
/*     function onRemove(){
        setInitial(initial - 1);
    } */
/*     function addToCart(){
        console.log("Se agregaron " + initial + " productos");
    } */

    if (stock === "0"){
        return (
            <React.Fragment>
            <p>No queda stock disponible!</p>
            </React.Fragment>
        );
    }
    else if(stock === "1"){
        return (
            <React.Fragment>
                <p>Queda solo {stock} unidad disponible</p>
                <p>Comprar: {initial} unidad</p>
                <Link to='/cart'>
                    <button className='AgregarCarrito' onClick={() => addToCart(detail.id)}>Comprar {initial} unidades</button>
                </Link>
            </React.Fragment>
        );
    }
    else {
        if ((1 < initial) && (stock > initial)){
            return (
                <React.Fragment>
                    <p>Quedan {stock} unidades disponibles</p>
                    <p>Comprar: {initial} unidades</p>
                    <button onClick={() => onRemove()}>-</button>
                    <button onClick={() => onAdd()}>+</button>
                    <Link to='/cart'>
                    <button className='AgregarCarrito' onClick={() => addToCart(detail.id)}>Comprar {initial} unidades</button>
                    </Link>
                </React.Fragment>
            );
        }
        else if (stock > initial){
            return (
                <React.Fragment>
                    <p>Quedan {stock} unidades disponibles</p>
                    <p>Comprar: {initial} unidades</p>
                    <button>-</button>
                    <button onClick={() => onAdd()}>+</button>
                    <Link to='/cart'>
                        <button className='AgregarCarrito' onClick={() => addToCart(detail.id)}>Comprar {initial} unidades</button>
                    </Link>
                </React.Fragment>
            );
        }
        else{
            return (
                <React.Fragment>
                <p>Quedan {stock} unidades disponibles</p>
                <p>Comprar: {initial} unidades</p>
                <button onClick={() => onRemove()}>-</button>
                <button>+</button>
                <Link to='/cart'>
                    <button className='AgregarCarrito' onClick={() => addToCart(detail.id)}>Comprar {initial} unidades</button>
                </Link>
                </React.Fragment>
            );
        }
    }
};

export default ItemCount;