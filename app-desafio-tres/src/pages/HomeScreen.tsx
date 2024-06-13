import React from 'react';
import Navbar from '../components/header/Navbar';
import Hero from '../components/hero/Hero';
import BrowseSections from '../components/browseSections/BrowseSections';
import Inspiration from '../components/inspiration/Inspiration';
import HomeProducts from '../components/productsCard/HomeProducts';

function HomeScreen() {
  return (
    <div>
      <Navbar />
      <Hero />
      <BrowseSections />
      <HomeProducts />
      <Inspiration />
      <p>Hello world!</p>
    </div>
  );
}

export default HomeScreen;
