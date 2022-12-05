import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
function NavBar() {
  return (
    <Navbar className = "navbar-bg"  expand="xl" sticky="top"  >
      <Container>
        <Navbar.Brand href="#home">Supermarket-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Link href="/">LOGO</Nav.Link>
            <Nav.Link href="" >Link</Nav.Link>
            <Form className="d-flex ">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
            <Nav.Link href="/login">Login</Nav.Link>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;