import React, { useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import "./ItemDetailContainer.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from './Spinner/Spinner';

const ItemDetailContainer = () => {
    const [details, setDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    let id=useParams().id;

    useEffect(() => {
        axios(`${process.env.REACT_APP_BASE_URL}products/${id}`).then((res) => setDetails(res.data));
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