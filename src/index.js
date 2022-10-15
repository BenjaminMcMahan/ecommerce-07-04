import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import MyStore from './redux/Store';
import './index.css';
import App from './App';
import Navigation from './components/Navigation';
import AddProduct from './products/AddProduct';
import Giveaway from './products/Giveaway';
import ProductDetails from './products/ProductDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={MyStore}>
    <BrowserRouter>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<App />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/giveaway" element={<Giveaway />} />
          <Route path="/product-details/:name-:quantity" element={<ProductDetails />} />
        </Routes>
      </Container>
    </BrowserRouter>
  </Provider>
);
