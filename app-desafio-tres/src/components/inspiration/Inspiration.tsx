import React from "react";
import Carousel from "./Carousel";
import "@splidejs/splide/dist/css/splide.min.css";
import '../../App.css';

const Inspiration = () => {
  return (
    <main className="bg-sand flex h-500">
      <div className="flex ml-10 p-5 pr-0 justify-between">
        <div className="flex flex-col justify-center w-1/3">
          <h1 className="font-bold text-4xl">50+ Beautiful rooms inspiration</h1>
          <p className="w-3/4">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <a href="/error" className="flex bg-primary w-40 justify-center pt-2 pb-2 text-white font-semibold mt-5"> Explore More</a>
        </div>
        <div className="w-4/6">
          <Carousel />
        </div>
      </div>
    </main>
  );
};

export default Inspiration;
