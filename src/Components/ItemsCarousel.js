import React from "react";
import Carousel from "react-bootstrap/Carousel";

export const ItemsCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/img/1.jpg"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/img/2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/img/3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
