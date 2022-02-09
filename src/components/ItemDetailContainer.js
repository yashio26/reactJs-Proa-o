import React from 'react';
import ItemDetail from './ItemDetail';
import "./ItemDetailContainer.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from './Spinner/Spinner';

const ItemDetailContainer = () => {
    const [details, setDetails] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(true);

    let id=useParams().id;
    console.log(id);

    React.useEffect(() => {
        axios(`https://fakestoreapi.com/products/${id}`).then((res) => setDetails(res.data));
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [id]);

    return(
        <>
        {isLoading ? (
            <div className='Spinner'>
                <Spinner />
            </div>
            ) : (
            <ItemDetail detail={details}/>
            )
        }
        </>
    );
};

export default ItemDetailContainer;