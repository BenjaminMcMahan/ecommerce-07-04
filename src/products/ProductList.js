import React from 'react';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

/*
  props = {
    products: [
      { name: 'My Toy', description: 'My description', quantity: 1, picture: ''},
      { name: 'My Toy', description: 'My description', quantity: 1, picture: '', picture: '', picture: null},
      { name: 'My Toy', description: 'My description', quantity: 1, picture: ''},
      { name: 'My Toy', description: 'My description', quantity: 1, picture: ''},
      { ... }
    ],
    show: true,
    hide: false
  }

  props.data;
*/

function ProductList({ products }) {
  // let { products } = data;

  return <Card>
    <CardHeader tag="h3">Product List</CardHeader>
    <CardBody>
      <Table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Picture</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products !== undefined && 
            products.map(product => {
              return <tr>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.quantity}</td>
                <td>{product.picture}</td>
                <td><Link to={`/product-details/${product.name}-${product.quantity}`}>View</Link></td>
              </tr>
          })}
       </tbody>
       </Table>
    </CardBody>
  </Card>;
};

export default ProductList;