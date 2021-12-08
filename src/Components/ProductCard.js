import React from "react";
import { Col, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProductCard = ({ item }) => {
  let details = "/product-details/" + item.id;

  return (
    <Col>
      <Link to={details}>
        <Card>
          <Card.Img variant="bottom" className="imgProduct" src={item.image} />
          <Card.Body>
            <Card.Title className="text-truncate">{item.title}</Card.Title>
            <Card.Text className="text-truncate">{item.description}</Card.Text>
            <Row xs={2}>
              <Col className="text-center">
                <h6>{item.category}</h6>
              </Col>
              <Col className="text-center">
                <h5>$ {item.price}</h5>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};
