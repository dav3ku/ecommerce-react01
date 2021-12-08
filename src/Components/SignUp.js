import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const SignUp = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (datas) => {
    console.log("Datos", datas);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto" id="box">
          <h2 className="text-center">Registro</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Control
                    name="name"
                    type="text"
                    placeholder="Ingresa tu nombre"
                    {...register("name", { required: true })}
                  />
                  {errors.name && <span>Campo requerido</span>}
                </Col>
                <Col>
                  <Form.Control
                    name="lastName"
                    type="text"
                    placeholder="Ingresa tu apellido"
                    {...register("lastName", { required: true })}
                  />
                  {errors.lastName && <span>Campo requerido</span>}
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                name="email"
                type="email"
                placeholder="tunombre@ejemplo.com"
                {...register("email", { required: true })}
              />
              {errors.email && <span>Campo requerido</span>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                name="password"
                type="password"
                placeholder="Ingresa contraseña"
                {...register("password", { required: true })}
              />
              {errors.password && <span>Campo requerido</span>}
            </Form.Group>

            <Row xs={1}>
              <Col className="text-center">
                <Button variant="primary" type="submit">
                  Registrarme
                </Button>
              </Col>
              <Col className="text-center">
                <Link to="/login">Iniciar sesión</Link>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
