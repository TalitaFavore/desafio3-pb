import React from "react";

const Error = () => {
  return (
    <div className="flex bg-custom3 h-screen font-poppins mt-6">
      <div className="flex flex-col text-5xl w-3/5 font-medium m-auto text-white">
        <h1 style={{ textShadow: "2px 2px 4px #000000" }}>
          Looks like this page got caught between the cushions!
        </h1>
        <div className="flex gap-4" style={{ textShadow: "2px 2px 4px #000000" }}>
        <h1 >
          Get comfortable on the
        </h1>
        <a href="/shop">shop</a>
        <h1>page.</h1>
        </div>
      </div>
    </div>
  );
};

export default Error;
