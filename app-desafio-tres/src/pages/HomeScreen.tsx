import React from 'react';
import Navbar from '../components/header/Navbar';
import Hero from '../components/hero/Hero';
import BrowseSections from '../components/browseSections/BrowseSections';
import Inspiration from '../components/inspiration/Inspiration';
import HomeProducts from '../components/productsCard/HomeProducts';
import Share from '../components/share/Share';
import Footer from '../components/footer/Footer';

function HomeScreen() {
  return (
    <div>
      <Navbar />
      <Hero />
      <BrowseSections />
      <HomeProducts />
      <Inspiration />
      <Share/>
      <Footer/>
    </div>
  );
}

export default HomeScreen;
