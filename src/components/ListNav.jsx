import React from 'react';
import Dropdown from './DropdownNav';

const ListNav = () => {
    return (
        <>
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Home
                        <span className="visually-hidden">(current)</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Categorias</a>
                </li>                
                <li className="nav-item">
                    <a className="nav-link" href="#">Quienes somos</a>
                </li>
                <Dropdown></Dropdown>
            </ul>
        </>
    )
}

export default ListNav;