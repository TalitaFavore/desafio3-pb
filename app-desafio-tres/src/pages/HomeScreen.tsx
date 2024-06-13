import React from 'react';
import Navbar from '../components/header/Navbar';
import Hero from '../components/hero/Hero';

const LoginScreen: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <p>Hello world!</p>
    </div>
  );
};

export default LoginScreen;
