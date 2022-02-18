import React, { useState, useEffect} from 'react';
import Item from '../Item/Item';
import './ItemListContainerElectronics.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const ItemListContainerClothes = () => {    
    const [electronics, setElectronics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios(`${process.env.REACT_APP_BASE_URL}products/category/electronics`).then((res) => setElectronics(res.data));
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        }, []);

    return (
    <div className="Articulos">
        {isLoading ? (
				<Spinner />
			) : ( 
                <>
                    {electronics.map((electronic) => {
                        return(
                            <div key={electronic.id} className='Articulo'>
                                <Link to={`/item/${electronic.id}`}>
                                    <Item data={electronic}/>
                                </Link>
                            </div>
                        );
                    })}
                </>
            )
        }
    </div>
    );
};

export default ItemListContainerClothes;