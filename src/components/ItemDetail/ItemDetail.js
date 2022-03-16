import React, {useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
//Context
import { ProductsContext } from '../../ProductsContext';

const ItemDetail = ({detail}) => {

  const {initial, onAdd, onRemove, addToCart} = useContext(ProductsContext);

  return(
    <>
      <div className='DescripcionArticulo'>
        <h2 className='Titulo'>{detail.producto}</h2>
        <img src={detail.img} alt='product'></img>
        <p>{detail.descripcion}</p>
        <h3>Precio: ${detail.precio}</h3>
        <ItemCount initial={initial} onAdd={onAdd} onRemove={onRemove} addToCart={addToCart} detail={detail}/>
      </div>
  </>
  );
};

export default ItemDetail;