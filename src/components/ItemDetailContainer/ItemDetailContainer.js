import React, { useState, useEffect} from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
//React-Router-Dom
import { useParams } from 'react-router-dom';
//Firestore
import { collection, query, getDocs, where, documentId } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

const ItemDetailContainer = () => {
    const [details, setDetails] = useState([]);

    let {id} =useParams();

    useEffect(() => {
        const obtenerProductos = async () => {
            const docs = [];
            const q = query(collection(db, "tienda"), where(documentId(), "==", id));
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            })
            setDetails(docs);
        };
        obtenerProductos();
    }, [id])

    return(
        <>
            {details.map((data) => {
                return <ItemDetail detail={data} key={data.id}/>
            })}
        </>
    );
};

export default ItemDetailContainer;