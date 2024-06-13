import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Carousel = () => {
  return (
    <Splide
      options={{
        type: "loop",
        perPage: 2.5,
        perMove: 1,
        gap: "1rem",
        autoplay: true,
        interval: 3000,
        pagination: true,
        arrows: true,
        focus: 0,
        breakpoints: {
          768: {
            perPage: 1.5,
          },
        },
      }}
      className="splide-custom"
    >
      <SplideSlide>
        <img
          src="https://pb-desafio3.s3.us-east-2.amazonaws.com/inspiration1.png"
          alt="Inspiração 1"
          className="carousel-image"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="https://pb-desafio3.s3.us-east-2.amazonaws.com/inspiration2.png"
          alt="Inspiração 2"
          className="carousel-image"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="https://pb-desafio3.s3.us-east-2.amazonaws.com/inspiration3.png"
          alt="Inspiração 3"
          className="carousel-image"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="https://pb-desafio3.s3.us-east-2.amazonaws.com/inspiration2.png"
          alt="Inspiração 2"
          className="carousel-image"
        />
      </SplideSlide>
    </Splide>
  );
};

export default Carousel;
