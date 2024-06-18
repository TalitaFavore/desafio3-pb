import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from '../pages/HomeScreen';
import LoginScreen from '../pages/LoginScreen';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
    </Routes>
  );
};

export default AppRoutes;
