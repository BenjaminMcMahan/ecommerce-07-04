import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, CardBody, CardHeader, Table } from 'reactstrap';
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

function ProductList() {
  // let { products } = data;

  const dispatch = useDispatch();
  const products = useSelector(function(state) {
    console.log('State of my store is', state);
    // what do we want from redux state?
    return state.productsList;
  });

  const handleDelete = (productIsbn) => {
    dispatch({
      type: 'DELETE_PRODUCT',
      deletedProduct: productIsbn
    });
  }
  
  return (
      <Card>
        <CardHeader tag="h3">Product List</CardHeader>
        <CardBody>
          <Table>
            <thead>
            <tr>
              <th>ISBN</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Picture</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {products !== undefined &&
                products.map((product, idx) => {
                  return (
                      <tr key={idx}>
                          <td>{product.isbn}</td>
                          <td>{product.name}</td>
                          <td>{product.description}</td>
                          <td>{product.quantity}</td>
                          <td><img width="100" src={product.picture} /></td>
                          <td>
                            <Link to={`/product-details/${product.name}-${product.quantity}`}>View</Link>&nbsp;
                            <Button onClick={() => handleDelete(product.isbn)} color="danger" size="sm">Delete</Button>
                          </td>
                      </tr>
                  )
                })}
            </tbody>
          </Table>
        </CardBody>
      </Card>
  );
}

export default ProductList;