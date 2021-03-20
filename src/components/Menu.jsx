import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const Menu = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" style={{color:"red"}}>
        <Container>
          <Navbar.Brand href="#">Tour véhicule</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <Nav.Link href="#">S'inscrire</Nav.Link>
              <Nav.Link eventKey={2} href="#">
                Se connecter
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
