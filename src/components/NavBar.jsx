import '../styles/NavBar.css';
import Form from './FormNav';
import ListNav from './ListNav';
import ButtonNav from './ButtonNav';
import logo from '../assets/logo-dario.png'



function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                <img src={logo} className="app-logo" alt="logo"/>
                    <ButtonNav></ButtonNav>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ListNav></ListNav>
                        <Form></Form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
