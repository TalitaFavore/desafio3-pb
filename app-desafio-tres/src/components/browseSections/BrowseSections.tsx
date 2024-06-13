import React from "react";

const BrowseSections = () => {
  return (
    <main className="flex flex-col font-poppins text-gray2">
      <div className="flex flex-col items-center mt-10 mb-14">
        <h1 className="font-bold text-2xl">Browse The Range</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 mr-36 ml-36">
        <div className="flex flex-col items-center font-bold">
          <img
            src="https://pb-desafio3.s3.us-east-2.amazonaws.com/dining.png"
            alt="Foto"
          />
          <p className="mt-5">Dining</p>
        </div>

        <div className="flex flex-col items-center font-bold">
          <img
            src="https://pb-desafio3.s3.us-east-2.amazonaws.com/living.png"
            alt="Foto"
          />
          <p className="mt-5">Living</p>
        </div>

        <div className="flex flex-col items-center font-bold">
          <img
            src="https://pb-desafio3.s3.us-east-2.amazonaws.com/bedroom.png"
            alt="Foto"
          />
          <p className="mt-5">Bedroom</p>
        </div>
      </div>
    </main>
  );
};

export default BrowseSections;
