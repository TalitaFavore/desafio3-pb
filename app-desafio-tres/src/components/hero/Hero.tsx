import React from "react";

const Hero = () => {
  return (
    <main className="flex bg-custom font-poppins justify-end h-screen mt-6">
      <div className="bg-sand3 flex flex-col justify-between h-3/5 w-2/5 p-10 pt-14 pr-16 m-auto mr-14">
        <p className="font-semibold">New Arrival</p>
        <h1 className="font-bold text-5xl w-4/5 text-primary">Discover Our New Collection</h1>
        <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <a className="bg-primary flex p-10 pt-4 pb-4 w-2/5 justify-center text-white font-bold" href="/shop">BUY NOW</a>
      </div>
      
    </main>
  );
};

export default Hero;
