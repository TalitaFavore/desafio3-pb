import React from "react";

const Description = () => {
  return (
    <main className="flex flex-col font-poppins">
      <hr className="border-gray8" />
      <div className="flex gap-36 m-auto text-xl mt-10 mb-10">
        <h1 className="font-medium">Description</h1>
        <h1 className="text-gray">Additional Information</h1>
      </div>

      <div className="flex flex-col m-auto w-4/6 gap-6 text-gray text-justify">
        <p>
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>

      <div className="flex gap-4 m-auto mt-10 mb-14">
        <img
          src="https://pb-desafio3.s3.us-east-2.amazonaws.com/whitesofa.png"
          alt=""
        />
        <img
          src="https://pb-desafio3.s3.us-east-2.amazonaws.com/whitesofa1.png"
          alt=""
        />
      </div>
      <hr className="border-gray8" />
    </main>
  );
};

export default Description;
