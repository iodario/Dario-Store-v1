import '../../styles/NavBar.css';
import Form from './FormNav';
import ListNav from './ListNav';
import ButtonNav from './ButtonNav';

import ItemListContainer from '../ItemListContainer/ItemListContainer'


function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                 <img src='img/logo-dario.png' className="app-logo" alt="logo"/>
                    <ButtonNav></ButtonNav>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ListNav></ListNav>
                        <Form contBuscar= "Productos"></Form>
                        <Form contBuscar= "Sucursales"></Form>
                        
                    </div>
                    <ItemListContainer/>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
