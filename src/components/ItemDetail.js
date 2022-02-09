import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({detail}) => {
  return(
    <>
      <div className='DescripcionArticulo'>
        <h2>{detail.title}</h2>
        <img src={detail.image} alt='product'></img>
        <h5>Description: {detail.description}</h5>
        <h3>Price: ${detail.price}</h3>
        <ItemCount stock="5"/>
      </div>
  </>
  );
};

export default ItemDetail;