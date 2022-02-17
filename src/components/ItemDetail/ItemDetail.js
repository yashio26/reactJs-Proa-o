import React, {useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../CartContext';

const ItemDetail = ({detail}) => {

  const {agregarAlCarrito} = useContext(CartContext);

  return(
    <>
      <div className='DescripcionArticulo'>
        <h2>{detail.title}</h2>
        <img src={detail.image} alt='product'></img>
        <h5>Description: {detail.description}</h5>
        <h3>Price: ${detail.price}</h3>
        <ItemCount stock="5" data={detail} agregarAlCarrito={agregarAlCarrito}/>
      </div>
  </>
  );
};

export default ItemDetail;