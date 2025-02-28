import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { EmailActionTypes } from "../../redux/types/emailTypes";
import { RootState } from "../../redux/reducers";
import { Link } from "react-router-dom";

const Footer = () => {
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.email.email);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    console.log("Antes:", email);
    dispatch({ type: EmailActionTypes.SET_EMAIL, payload: newEmail });
    console.log("Depois:", email);
  };

  const handleSubscribeClick = () => {
    console.log("Antes:", email);
    dispatch({ type: EmailActionTypes.SET_EMAIL, payload: email });
    console.log("Depois:", email);
  };

  return (
    <footer className="font-poppins text-xs text-black pb-14">
      <hr className="border-gray8" />
      <div className="flex flex-col md:flex-row mt-10 ml-14 mr-40 justify-between">
        <div className="flex flex-col mb-10">
          <h1 className="font-bold text-3xl md:text-xl mb-10">Funiro.</h1>
          <p className="text-gray text-sm">
            400 University Drive Suite 200 Coral Gables,{" "}
          </p>
          <p className="text-gray text-sm">FL 33134 USA</p>

          <div className="flex  mt-10">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://pb-desafio3.s3.us-east-2.amazonaws.com/facebook.svg"
                alt="Facebook"
                className="w-18 h-18"
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://pb-desafio3.s3.us-east-2.amazonaws.com/twitter.svg"
                alt="Twitter"
                className="w-18 h-18"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://pb-desafio3.s3.us-east-2.amazonaws.com/instagram.svg"
                alt="Instagram"
                className="w-18 h-18"
              />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://pb-desafio3.s3.us-east-2.amazonaws.com/linkedin.svg"
                alt="Linkedin"
                className="w-18 h-18"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col text-sm font-medium">
          <ul>
            <li className="pb-10 text-gray">Links</li>
            <Link to="/">
            <li className="pb-10 hover:text-primary">Home</li>
            </Link>
            <Link to="/shop">
            <li className="pb-10 hover:text-primary">Shop</li>
            </Link>
            
            <Link to="/error">
            <li className="pb-10 hover:text-primary">About</li>
            </Link>
            
            <Link to="/contact">
            <li className="pb-10 hover:text-primary">Contact</li>
            </Link>
            
          </ul>
        </div>

        <div className="flex flex-col text-sm font-medium">
          <ul>
            <li className="pb-10 text-gray">Help</li>
            <li className="pb-10 hover:text-primary">Payment Options</li>
            <li className="pb-10 hover:text-primary">Returns</li>
            <li className="hover:text-primary">Privacy Policies</li>
          </ul>
        </div>

        <div className="flex flex-col text-sm font-medium">
          <h2 className="pb-10 text-gray">Newsletter</h2>
          <div>
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter Your Email Address"
              className="border-b border-black focus:outline-none w-3/5"
            />
            <button
              onClick={handleSubscribeClick}
              className="hover:text-primary border-b border-black ml-2 cursor-pointer"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <div className="ml-10 mr-10 md:ml-14 md:mr-20">
        <hr className="border-gray8" />
      </div>

      <div className="flex justify-between p-4 pl-10 pr-10 md:pl-20 md:pr-20">
        <div>
          <p>2023 Funiro. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
