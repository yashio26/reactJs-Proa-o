import React, { useContext } from 'react';
import Item from '../Item/Item';
import './ItemList.css';
/* import axios from 'axios'; */
import { Link } from 'react-router-dom';
/* import Spinner from '../Spinner/Spinner'; */
import { ProductsContext } from '../../ProductsContext';

const ItemList = () => {    
/*     const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios(`${process.env.REACT_APP_BASE_URL}products`).then((res) => setProducts(res.data));
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        }, []); */

        const {products} = useContext(ProductsContext);

    return (
    <div className="Articulos">
                    {products.map((product) => {
                        return(
                            <div key={product.id} className='Articulo'>
                                <Link to={`/item/${product.id}`}>
                                    <Item detail={product}/>
                                </Link>
                            </div>
                        );
                    })}
    </div>
    );
};

export default ItemList;