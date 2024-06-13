import React from 'react';
import Navbar from '../components/header/Navbar';
import Hero from '../components/hero/Hero';
import BrowseSections from '../components/browseSections/BrowseSections';
import Inspiration from '../components/inspiration/Inspiration';

const LoginScreen: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <BrowseSections/>
      <Inspiration/>
      <p>Hello world!</p>
    </div>
  );
};

export default LoginScreen;
