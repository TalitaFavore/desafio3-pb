import React from "react";
import Carousel from "./Carousel";
import "@splidejs/splide/dist/css/splide.min.css";

const Inspiration = () => {
  return (
    <main>
      <div>
        <h1>50+ Beautiful rooms inspiration</h1>
        <p>
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <a href="/"> Explore More</a>
      </div>
      <div>
        <Carousel />
      </div>
    </main>
  );
};

export default Inspiration;
