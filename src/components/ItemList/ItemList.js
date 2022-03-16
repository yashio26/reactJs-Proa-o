import React, { useContext } from 'react';
import './ItemList.css';
import Item from '../Item/Item';
import Spinner from '../Spinner/Spinner';
//React-Router-Dom
import { Link } from 'react-router-dom';
//Context
import { ProductsContext } from '../../ProductsContext';

const ItemList = () => {    

    const {products, isLoading} = useContext(ProductsContext);

    return (
    <div className="Articulos">
        {isLoading ?
        <Spinner /> :
        <>
        {products.map((product) => {
            return(
                <div key={product.id} className='Articulo'>
                    <Link to={`/item/${product.id}`} style={{textDecoration: 'none'}}>
                        <Item detail={product}/>
                    </Link>
                </div>
            );
        })}
        </>
        }
    </div>
    );
};

export default ItemList;