import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Navigation from './components/Navigation';
import AddProduct from './products/AddProduct';
import ProductDetails from './products/ProductDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<App />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/product-details/:name-:quantity" element={<ProductDetails />} />
    </Routes>
    {/* <App /> */}
  </BrowserRouter>
);
