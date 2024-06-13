import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './utils/Route';
import '@splidejs/splide/dist/css/splide.min.css';

const App: React.FC = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
