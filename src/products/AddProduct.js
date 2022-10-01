import React, { useState } from 'react';
import ProductList from './ProductList';
import { Card, CardBody, CardHeader, Col, Button, Form, FormGroup, Input, Label } from 'reactstrap';

/*
  State management:
    - Writeable data, but immutable (can't mutate the original state)
      - To properly update an immutable data, you must clone the original and then replace the old
    - Makes decisions on re-rendering our component
*/

// function sayName() {
//   console.log('Mary C');
// }

// sayName(); // 'Nas B'
// sayName(); // Mary

/*
  <AppProduct /> = AddProduct(); // renders the JSX
  AddProduct(); // invoke another call -- render the JSX again
  AddProduct(); // invoke another call -- render the JSX again
  AddProduct(); // invoke another call -- render the JSX again
  AddProduct(); // invoke another call -- render the JSX again
*/

function AddProduct() {

  // Hooks: Hooking into react's lifecycle events
  // useState() returns an array => [ data, function to set the data ]
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [quantity, setQuantity] = useState();
  const [picture, setPicture] = useState();
  const [productList, setProductList] = useState([]); // argument sets the default of the data

  const handleProductName = function(event) {
    console.log(event.target.value);
    setName(event.target.value.toLowerCase());
  }

  const handleDescription = function(event) {
    console.log(event.target.value);
    setDescription(event.target.value);
  }

  const handleQuantity = function(event) {
    console.log(event.target.value);
    setQuantity(event.target.value);
  }

  const handlePicture = function(event) {
    console.log(event.target.value);
    setPicture(event.target.value);
  }

  const handleSubmit = function(event) {
    event.preventDefault(); // prevents the form from submitting, since we're pulling in the event
    // Combine all the product data into an object and add it to our productsList array
    let product = {
      name,
      description,
      quantity,
      picture
    }

    setProductList((currentProductList) => [...currentProductList, product]); // Set products list to an array with the product object
  }

  // productList.push({name: 'ABC'});

  return (
      <div>
        <Card>
          <CardHeader tag="h3">Add a Product</CardHeader>
          <CardBody>
            {/* Form goes here */}
            <Form>
              <FormGroup row>
                <Label xs={3}>Name</Label>
                <Col xs={9}>
                  <Input name="product" onChange={handleProductName} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label xs={3}>Description</Label>
                <Col xs={9}>
                  <Input type="textarea" name="description" onChange={handleDescription} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label xs={3}>Quantity</Label>
                <Col xs={9}>
                  <Input type="number" name="quantity" onChange={handleQuantity} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label xs={3}>Picture</Label>
                <Col xs={9}>
                  <Input type="file" name="picture" onChange={handlePicture} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col xs={12}>
                  <Button color="success" onClick={handleSubmit}>Submit</Button>
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
        <ProductList show={true} hide={false}
                     products={productList}
        />
      </div>
  );
}

export default AddProduct;