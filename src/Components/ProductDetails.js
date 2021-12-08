import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { getProduct } from "../Services/Products";

export const ProductDetails = () => {
  const [data, setData] = useState([]);
  const { ID } = useParams();

  useEffect(() => {
    getProduct(ID).then((results) => setData(results));

    return () => {
      setData([]);
    };
  }, []);

  return (
    <Container>
      <Row xs={1} className="justify-content-md-center">
        <Col xs={12} md={8}>
          <Card>
            <Card.Body>
              <Row xs={1} md={2}>
                <Col md={4}>
                  <Card.Img className="imgProduct" src={data.image} />
                </Col>
                <Col md={8}>
                  <Card.Title>{data.title}</Card.Title>
                  <h6>Category: {data.category}</h6>
                  <br />
                  <Card.Text>{data.description}</Card.Text>
                  <br />
                  <Row xs={2}>
                    <Col className="text-center">
                      <h4>$ {data.price}</h4>
                    </Col>
                    <Col className="text-center">
                      <Button>COMPRAR</Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
