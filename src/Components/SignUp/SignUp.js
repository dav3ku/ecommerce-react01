import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

var register = {
  name: "",
  lastName: "",
  email: "",
  password: "",
};

export const SignUp = (props) => {
  const [form, setForm] = useState(register);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos", form);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h2 className="text-center">Registro</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Ingresa tu nombre"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                name="lastName"
                type="text"
                placeholder="Ingresa tu apellido"
                onChange={handleChange}
                value={form.lastName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="tunombre@ejemplo.com"
                onChange={handleChange}
                value={form.email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Ingresa contraseña"
                onChange={handleChange}
                value={form.password}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Registrarme
            </Button>
          </Form>
          <p className="text-center">Iniciar sesión</p>
        </Col>
      </Row>
    </Container>
  );
};
