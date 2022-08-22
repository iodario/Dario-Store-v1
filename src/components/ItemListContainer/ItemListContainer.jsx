import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {

    const Productos = ['producto1', 'producto2', 'producto3'];
    const listaProductos = Productos.forEach(producto => {
        <ul>
            <li>{producto}</li>
        </ul>        
    });
    

    return (
        <>
            {/* {listaProductos} */}
            <h1>{greeting}</h1>
        </>

    )
}

export default ItemListContainer;