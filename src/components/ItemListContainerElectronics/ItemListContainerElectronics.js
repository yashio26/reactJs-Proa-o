import React, { useState, useEffect} from 'react';
import Item from '../Item/Item';
import '../ItemList/ItemList.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ItemListContainerClothes = () => {    
    const [electronics, setElectronics] = useState([]);

    useEffect(() => {
        axios(`${process.env.REACT_APP_BASE_URL}products/category/electronics`).then((res) => setElectronics(res.data));
        }, []);

    return (
    <div className="Articulos">
        {electronics.map((electronic) => {
            return(
                <div key={electronic.id} className='Articulo'>
                    <Link to={`/item/${electronic.id}`}>
                        <Item data={electronic}/>
                    </Link>
                </div>
            );
        })}
    </div>
    );
};

export default ItemListContainerClothes;