import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const params = useParams();

  console.log(params);
  return (
      <Card>
        <CardHeader>Product Details</CardHeader>
        <CardBody>
          You are viewing details for product: {params.name}
          <br />
          There are {params.quantity} left in stock.
        </CardBody>
      </Card>
  )
}

export default ProductDetails;