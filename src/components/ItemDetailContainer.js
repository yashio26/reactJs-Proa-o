import React from 'react';
import ItemDetail from './ItemDetail';
import "./ItemDetailContainer.css";
import axios from 'axios';

const ItemDetailContainer = () => {
    const [details, setDetails] = React.useState({});

    console.log(details);

    React.useEffect(() => {
        setTimeout(() => {
            axios("https://fakestoreapi.com/products/1").then((res) => setDetails(res.data));
        }, 2000)
    }, []);

    return(
        <div className='DetalleArticulos'>
            <div className='CardArticulo'>
                <ItemDetail detail={details}/>
            </div>
            <div className='DescripcionArticulo'>
                <h2>{details.title}</h2>
                <h5>{details.description}</h5>
                <h3>Price: ${details.price}</h3>
            </div>
        </div>
    );
};

export default ItemDetailContainer;