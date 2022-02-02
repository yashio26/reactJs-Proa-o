import React from 'react';
import Item from "./Item";
import "./ItemList.css";

const ItemList = () => {    
    const [products, setProducts] = React.useState([]);

    console.log(products);

    React.useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            // .then((json) => console.log(json));
            .then((json) => setProducts(json));
        }, []);

    return (
    <div className="Articulos">
        {products.map((product) => {
            return(
                <div key={product.id} className='Articulo'>
                    <Item data={product}/>
                </div>
            );
        })}
    </div>
    );
};

export default ItemList;