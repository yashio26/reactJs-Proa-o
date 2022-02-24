import React, { useState, useEffect} from 'react';
import Item from '../Item/Item';
import './ItemListContainerCategory.css';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

const ItemListContainerCategory = () => {    
    const [seleccionCategoria, setSeleccionCategoria] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { categoria } = useParams();
    console.log(seleccionCategoria);
    console.log(categoria)


    useEffect(() => {
        const obtenerCategoria = async () => {
            const docs = [];
            const q = query(collection(db, "tienda"), where("categoria", "==", categoria));
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            })
            setSeleccionCategoria(docs);
        };
        obtenerCategoria();
        console.log(obtenerCategoria);
    }, [categoria])


    return (
    <div className="Articulos">
        {isLoading ? (
				<Spinner />
			) : (
                <>
                {seleccionCategoria.map((cat) => {
                    return(
                        <div key={cat.id} className='Articulo'>
                            <Link to={`/item/${cat.id}`}>
                                <Item detail={cat} key={cat.id}/>
                            </Link>

                        </div>
                    )
                })}
                </>
            )
        }
    </div>
    );
};

export default ItemListContainerCategory;