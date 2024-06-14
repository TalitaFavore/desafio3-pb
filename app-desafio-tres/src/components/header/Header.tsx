import React from "react";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <div className="flex bg-custom2 h-316">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Header;
