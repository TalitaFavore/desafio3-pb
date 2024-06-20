import React from 'react';
import { useParams } from 'react-router-dom';
import Description from '../components/description/Description';
import Navbar from '../components/header/Navbar';
import Footer from '../components/footer/Footer';
import SingleProduct from '../components/details/SingleProduct';
import PathBar from '../components/details/PathBar';
import RelatedProducts from '../components/details/RelatedProducts';

const SingleProductScreen = () => {
  const { id } = useParams<{ id: string }>(); // Use useParams com tipagem explícita

  // Verificar se id é undefined antes de utilizá-lo
  if (!id) {
    return <div>Loading...</div>; // Ou qualquer outra lógica para lidar com id não definido
  }

  return (
    <div>
      <Navbar />
      <PathBar />
      <SingleProduct />
      <Description />
      <RelatedProducts productId={id} />
      <Footer />
    </div>
  );
};

export default SingleProductScreen;
