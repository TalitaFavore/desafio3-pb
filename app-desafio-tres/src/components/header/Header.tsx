import React from "react";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <div className="flex flex-col bg-custom2 h-316 text-black items-center justify-center font-poppins mt-6">
      <img src="https://pb-desafio3.s3.us-east-2.amazonaws.com/minilogo.svg" alt="" />
      <h1 className="text-4xl font-medium">{title}</h1>
      <p className="text-lg mt-2">{subtitle}</p>
    </div>
  );
};

export default Header;
