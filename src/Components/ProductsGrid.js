import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

import { getAllProducts } from "../Services/Products";
import { ProductCard } from "./ProductCard";

export const ProductsGrid = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getAllProducts().then((resp) => {
      setDatas(resp);
    });

    return () => {
      setDatas([]);
    };
  }, []);

  return (
    <Container>
      <Row xs={1} md={2} lg={4}>
        {datas.map((item) => (
          <ProductCard key={item.id} item={item}></ProductCard>
        ))}
      </Row>
    </Container>
  );
};
