import React from "react";
import { Container, Navbar, Button, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CompNavbar = () => {
  return (
    <Navbar bg="primary" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Mi tienda
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="¿Que deseas?"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
          <Nav className="my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/login">
              Acceder
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              Registrarme
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
