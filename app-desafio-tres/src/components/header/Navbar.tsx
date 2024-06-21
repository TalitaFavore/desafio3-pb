import React, { useState } from "react";
import { ActiveLink } from "./ActiveLink";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="bg-wisper font-poppins font-medium ml-14 mr-16 mt-7">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src="https://pb-desafio3.s3.us-east-2.amazonaws.com/furnirologo.svg" className="cursor-pointer" alt="Logo da Furniro" />
        </Link>
        <div className="flex-1 flex justify-end lg:hidden">
          {!isOpen && (
            <button onClick={toggleMenu}>
              <svg
                className="w-6 h-6"
                stroke="black"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          )}
        </div>
        <nav>
          <ul className="hidden lg:flex lg:flex-row lg:flex-wrap lg:gap-20">
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/shop">Shop</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/error">About</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/contact">Contact</ActiveLink>
            </li>
          </ul>
        </nav>
        <div className="hidden lg:block">
          <div className="flex flex-row gap-6 ml-12">
            <Link to="/login">
            <img src="https://pb-desafio3.s3.us-east-2.amazonaws.com/user.svg" alt="ícone de user" className="cursor-pointer "/>
            </Link>
            
            <Link to="/cart">
            <img src="https://pb-desafio3.s3.us-east-2.amazonaws.com/shopping-cart.svg" alt="ícone de carrinho de compras" className="cursor-pointer"/>
            </Link>
            
          </div>
        </div>

        <div
          className={`fixed top-0 right-0 h-full z-50 transition-transform transform bg-sand ${isOpen ? "translate-x-0" : "translate-x-full"} w-3/5 lg:hidden`}
        >
          <button onClick={toggleMenu} className="absolute top-4 right-4">
            <svg
              className="w-6 h-6 text-black"
              stroke="black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <nav>
            <ul className="flex flex-col mt-16 gap-4 ml-8 text-lg">
              <li>
                <ActiveLink to="/">Home</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/shop">Shop</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/about">About</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/contact">Contact</ActiveLink>
              </li>
              <img src="https://pb-desafio3.s3.us-east-2.amazonaws.com/user.svg" alt="ícone de user" className="cursor-pointer w-8 ml-1"  />
            <img src="https://pb-desafio3.s3.us-east-2.amazonaws.com/shopping-cart.svg" alt="ícone de carrinho de compras" className="cursor-pointer w-8" />
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
