import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark" className="rounded">
            <Container>
                <Nav.Link as={NavLink} to="/"><Navbar.Brand>Waiter.app</Navbar.Brand></Nav.Link>
                <Nav className="me-right">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;