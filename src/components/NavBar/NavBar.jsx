import Form from './FormNav';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget'



function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <img src='img/logo-dario.png' className="app-logo" alt="logo" />
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active home" href="google.com">Home</a>
                            </li>
                            <li className="nav-item categorias">
                                <a className="nav-link" href="google.com">Categorias</a>
                            </li>
                        </ul>
                        <Form contBuscar="Productos" />
                        <Form contBuscar="Sucursales" />
                        <CartWidget />

                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
