import React from 'react';
import Navbar from '../components/header/Navbar';
import Hero from '../components/hero/Hero';
import BrowseSections from '../components/browseSections/BrowseSections';

const LoginScreen: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <BrowseSections/>
      <p>Hello world!</p>
    </div>
  );
};

export default LoginScreen;
