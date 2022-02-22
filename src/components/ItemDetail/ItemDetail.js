import React, {useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { ProductsContext } from '../../ProductsContext';

const ItemDetail = ({detail}) => {

  const {initial, onAdd, onRemove, addToCart} = useContext(ProductsContext);

  return(
    <>
      <div className='DescripcionArticulo'>
        <h2>{detail.title}</h2>
        <img src={detail.image} alt='product'></img>
        <h5>Description: {detail.description}</h5>
        <h3>Price: ${detail.price}</h3>
        <ItemCount stock="5" initial={initial} onAdd={onAdd} onRemove={onRemove} addToCart={addToCart} detail={detail}/>
      </div>
  </>
  );
};

export default ItemDetail;