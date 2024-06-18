import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import store from './redux/store';
import AppRoutes from './utils/Route';
import '@splidejs/splide/dist/css/splide.min.css';


const App = () => {
  return (
    <Provider store={store}> 
      <Router>
        <AppRoutes />
      </Router>
    </Provider>
  );
};

export default App;
