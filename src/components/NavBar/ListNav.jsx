import React from 'react';
import Dropdown from './DropdownNav';
import '../../styles/NavBar.css';

const ListNav = () => {
    return (
        <>
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <a className="nav-link active home" href="google.com">Home
                        <span className="visually-hidden">(current)</span>
                    </a>
                </li>
                <li className="nav-item categorias">
                    <a className="nav-link" href="google.com">Categorias</a>
                </li>                
                <li className="nav-item about">
                    <a className="nav-link" href="google.com">Quienes somos</a>
                </li>
                <Dropdown></Dropdown>
            </ul>
        </>
    )
}

export default ListNav;