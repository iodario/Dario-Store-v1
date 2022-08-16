import '../styles/NavBar.css';
import Form from './FormNav';
import ListNav from './ListNav';
import ButtonNav from './ButtonNav';


function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <h1 className="navbar-brand">Dario Store</h1>
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
