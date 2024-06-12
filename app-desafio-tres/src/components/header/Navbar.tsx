import React from "react";
import { ActiveLink } from "./ActiveLink";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <main >
      <div >
        <Link to="/">
          <img src="https://pb-desafio3.s3.us-east-2.amazonaws.com/furnirologo.svg" alt="Logo da Furniro" />
        </Link>
        <nav>
          <ul >
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
          </ul>
        </nav>
        <div >
          <div>
            <img src="https://pb-desafio3.s3.us-east-2.amazonaws.com/user.svg" alt="ícone de user" />
            <img src="https://pb-desafio3.s3.us-east-2.amazonaws.com/shopping-cart.svg" alt="ícone de carrinho de compras"/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
