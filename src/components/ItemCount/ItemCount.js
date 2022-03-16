import React from 'react';
import './ItemCount.css';
//React-Router-Dom
import { Link } from 'react-router-dom';


const ItemCount = ({initial, onAdd, onRemove, addToCart, detail}) => {

    if (detail.stock === 0){
        return (
            <div className='Stock'>
            <p>No queda stock disponible!</p>
            </div>
        );
    }
    else if(detail.stock === 1){
        return (
            <div className='Stock'>
                <p>¡Queda solo {detail.stock} unidad disponible!</p>
                <Link to='/carrito'>
                    <button className='BotonAgregarCarrito' onClick={() => addToCart(detail.id)}>Comprar {initial} unidad</button>
                </Link>
            </div>
        );
    }
    else {
        if ((1 < initial) && (detail.stock > initial)){
            return (
                <div className='Stock'>
                    <p>Quedan {detail.stock} unidades disponibles</p>
                    <div className='CantidadAComprar'>
                        <button onClick={() => onRemove()}>-</button>
                        <Link to='/carrito'>
                            <button className='BotonAgregarCarrito' onClick={() => addToCart(detail.id)}>Comprar {initial} unidades</button>
                        </Link>
                        <button onClick={() => onAdd()}>+</button>
                    </div>
                </div>
            );
        }
        else if (detail.stock > initial){
            return (
                <div className='Stock'>
                    <p>Quedan {detail.stock} unidades disponibles</p>
                    <div className='CantidadAComprar'>
                        <button>-</button>
                        <Link to='/carrito'>
                            <button className='BotonAgregarCarrito' onClick={() => addToCart(detail.id)}>Comprar {initial} unidades</button>
                        </Link>
                        <button onClick={() => onAdd()}>+</button>
                    </div>
                </div>
            );
        }
        else{
            return (
                <div className='Stock'>
                <p>Quedan {detail.stock} unidades disponibles</p>
                <div className='CantidadAComprar'>
                    <button onClick={() => onRemove()}>-</button>
                    <Link to='/carrito'>
                        <button className='BotonAgregarCarrito' onClick={() => addToCart(detail.id)}>Comprar {initial} unidades</button>
                    </Link>
                    <button>+</button>
                </div>
                </div>
            );
        }
    }
};

export default ItemCount;