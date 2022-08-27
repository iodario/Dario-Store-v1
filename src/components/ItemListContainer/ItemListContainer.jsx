import React from 'react';
import './ItemListContainer.css';

const Productos = ['producto1', 'producto2', 'producto3'];
const ItemListContainer = () => {
    const listaProductos = Productos.map((producto) =>(
        <ul>
            <li key={producto}>{producto}</li>
        </ul>        
    ));
    
    return (
        <>
            {listaProductos}            
        </>

    )
}

export default ItemListContainer;