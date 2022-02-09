import React from 'react';
import Item from "./Item";
import "./ItemList.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from './Spinner/Spinner';

const ItemList = () => {    
    const [products, setProducts] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    console.log(products);

    React.useEffect(() => {
        axios("https://fakestoreapi.com/products").then((res) => setProducts(res.data));
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
                    {products.map((product) => {
                        return(
                            <div key={product.id} className='Articulo'>
                                <Link to={`/item/${product.id}`}>
                                    <Item data={product}/>
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

export default ItemList;