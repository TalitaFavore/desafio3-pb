import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Carousel = () => {
  return (
    <Splide
      options={{
        type       : 'loop',
        perPage    : 4,
        perMove    : 1,
        gap        : '1rem',
        autoplay   : true,
        interval   : 3000,
        pagination : false,
        arrows     : true,
      }}
    >
      <SplideSlide>
        <img src="https://pb-desafio3.s3.us-east-2.amazonaws.com/inspiration1.png" alt="Inspiração 1" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://pb-desafio3.s3.us-east-2.amazonaws.com/inspiration2.png" alt="Inspiração 2" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://pb-desafio3.s3.us-east-2.amazonaws.com/inspiration3.png" alt="Inspiração 3" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://pb-desafio3.s3.us-east-2.amazonaws.com/inspiration2.png" alt="Inspiração 2" />
      </SplideSlide>

      {/* Adicione mais slides conforme necessário */}
    </Splide>
  );
};

export default Carousel;
