import React from 'react';
import ItemCount from './ItemCount';
import ItemList from "./ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  return (
    <React.Fragment>
      <div>
        <ItemList />
      </div>
      <div>
        <ItemCount stock="5"/>
      </div>
    </React.Fragment>
  );
};

export default ItemListContainer;