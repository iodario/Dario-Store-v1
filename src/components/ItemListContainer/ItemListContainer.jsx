import React from 'react';

const ItemListContainer = () => {
    const Productos = ['producto1', 'producto2', 'producto3'];
    const listaProductos = Productos.forEach(producto => {
        <ul>
            <li>{producto}</li>
        </ul>
        // console.log(producto);
    });
    

    return (
        <>
            {/* {listaProductos} */}
            <h1>Lista de Productos</h1>
        </>

    )
}

export default ItemListContainer;