import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from '../pages/HomeScreen';
import LoginScreen from '../pages/LoginScreen';
import ShopScreen from '../pages/ShopScreen';
import ContactScreen from '../pages/ContactScreen';
import SingleProductScreen from '../pages/SingleProductScreen';
import ErrorScreen from '../pages/ErrorScreen';
import CheckoutScreen from '../pages/CheckoutScreen';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/shop" element={<ShopScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="/single" element={<SingleProductScreen />} />
      <Route path="/error" element={<ErrorScreen />} />
      <Route path="/checkout" element={<CheckoutScreen />} />
    </Routes>
  );
};

export default AppRoutes;
