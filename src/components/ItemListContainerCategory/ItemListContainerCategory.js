import React, { useState, useEffect} from 'react';
import './ItemListContainerCategory.css';
import Item from '../Item/Item';
import Spinner from '../Spinner/Spinner';
//React-Router-Dom
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
//Firebase
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

const ItemListContainerCategory = () => { 

    const [seleccionCategoria, setSeleccionCategoria] = useState([]);
    
    const [isLoading, setIsLoading] = useState(true);

    const { categoria } = useParams();

    const capitalize = (palabra) => {
        return palabra[0].toUpperCase() + palabra.slice(1);
    }


    useEffect(() => {
        const obtenerCategoria = async () => {
            const docs = [];
            const q = query(collection(db, "tienda"), where("categoria", "==", capitalize(categoria)));
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            })
            setSeleccionCategoria(docs);
        };
        obtenerCategoria();
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    }, [categoria])


    return (
        <>
            <h1 className='Titulo'>{capitalize(categoria)}</h1>
            <div className="Articulos">
                {isLoading ? (
        				<Spinner />
        			) : (
                        <>
                        {seleccionCategoria.map((cat) => {
                            return(
                                <div key={cat.id} className='Articulo'>
                                    <Link to={`/item/${cat.id}`} className='Link'>
                                        <Item detail={cat} key={cat.id}/>
                                    </Link>
                                </div>
                            )
                        })}
                        </>
                    )
                }
            </div>
        </>
    );
};

export default ItemListContainerCategory;