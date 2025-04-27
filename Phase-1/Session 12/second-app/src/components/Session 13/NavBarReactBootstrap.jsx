
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBarReactBootstrap() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/home">Simplelearn</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/home">Home</Link>
                        <Link className="nav-link" to="/users">Users</Link>
                        <Link className="nav-link" to="/counter">Counter</Link>
                        <Link className="nav-link" to="/form">Form Validation</Link>
                        <Link className="nav-link" to="/resize">Resize</Link>
                        <Link className="nav-link" to="/propdrilling">Prop Drilling</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBarReactBootstrap;