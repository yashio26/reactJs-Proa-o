import React, { useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
/* import axios from 'axios'; */
import { useParams } from 'react-router-dom';
/* import Spinner from '../Spinner/Spinner'; */
import { collection, query, getDocs, where, documentId } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

const ItemDetailContainer = () => {
    const [details, setDetails] = useState([]);
/*     const [isLoading, setIsLoading] = useState(true); */

    let {id} =useParams();
    console.log(details)

    useEffect(() => {
        const obtenerProductos = async () => {
            const docs = [];
            const q = query(collection(db, "tienda"), where(documentId(), "==", id));
            const querySnapshot = await getDocs(q)
/*             console.log("Query: ", querySnapshot) */
            querySnapshot.forEach((doc) => {
/*                 console.log(doc.data(), "ID:", doc.id) */
                docs.push({...doc.data(), id: doc.id})
            })
            setDetails(docs);
        };
        obtenerProductos();
    }, [id])
    console.log(details)
    return(
        <>
            {details.map((data) => {
                return <ItemDetail detail={data} key={data.id}/>
            })}
        </>
    );
};

export default ItemDetailContainer;