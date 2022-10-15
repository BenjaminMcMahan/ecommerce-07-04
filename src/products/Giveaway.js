import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Card, CardHeader, CardBody, Alert, CardTitle, CardFooter, FormGroup, Form, Label, Input, Button } from 'reactstrap';

/*
  Optional Challenges:
    - Restart the timer with a button
    - Hide the winner message if we don't have a winner
    - Add validation to the email input field
    - Handle the Cancel button
*/

// const giveawayToys = [
//   'Robocop', 'Stretch Armstrong', 'GI Joe', 'Model Airplane', 'Go Bots', 'Lawn Darts for Children'
// ];

const INITIAL_TIMER = 30;

function Giveaway() {
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  const giveawayToys = useSelector(state => state.productsList.map(toy => toy.name));
  console.log('giveaway toys', giveawayToys);
  const [data, setData] = useState({});
  const [disableButton, setDisableButton] = useState(true);
  const [timer, setTimer] = useState(INITIAL_TIMER);
  const [timerInterval, setTimerInterval] = useState();
  const [message, setMessage] = useState();
  const [winner, setWinner] = useState({});

  const nameInput = useRef(); // creating a blank reference pointer
  const emailInput = useRef(); // creating a blank reference pointer

  /*
    useEffect: hooking into the effect of a component's lifecycle event
      - Running a side effect based off a lifecycle event
    
      Arguments:
        1. Callback function (side effect)
        2. Dependencies to run the effect (aka when do we call our side effect?)
          a) null = for every component render
          b) [] = for only the FIRST render
          c) [data, data2] = for only when data or data2 changes
  */

  // only run first time component renders
  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);
    setTimerInterval(interval);
  }, []);

  // Only run when timer changes
  useEffect(() => {
    // Stop the timer
    if (timer === 0) {
      clearInterval(timerInterval);
      setMessage("You ran out of time, try again tomorrow");
    }
  }, [timer]);

  const handleInput = (event) => {
    let isValid = false;
    let inputName = event.target.name;
    if (inputName === 'name') {
      let regex = /[A-Za-z]+/;
      if (regex.test(event.target.value)) {
        isValid = true;
      }
    }

    let temp = { [inputName]: event.target.value };

    if (isValid) {
      setData(prevData => ({ ...prevData, temp }));
      setDisableButton(false);
    }
  }

  // const handleEmail = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handleName = (event) => {
  //   let regex = /[A-Za-z]+/;
  //   let input = event.target.value;
  //   console.log("name is", input);

  //   // console.log("Name Input Ref Value", nameInput.current.value);
  //   if (regex.test(input)) {
  //     setName(event.target.value); // only set if validation passes
  //     setDisableButton(false);
  //   } else {
  //     setDisableButton(true);
  //   }
  // };

  const handleSubmit = (event) => {
    // Give away a random toy = pick a random item from the array
    let randomNumber = Math.floor(Math.random() * (giveawayToys.length + 3)); // 0.23
    let randomToy = giveawayToys[randomNumber];
    console.log("Number picked", randomNumber);

    setWinner({ winnerName: data.name, toy: randomToy });
    // console.log("data ", nameInput.current.value, emailInput.current.value);
  };

  return <Card>
    <CardHeader tag="h3">Product Giveaway!</CardHeader>
    <Form>
      <CardBody>
        <h5>You have {timer} seconds to enter</h5>
        {message && <Alert color="danger">{message}</Alert>}
        {Object.keys(winner).length > 0 && <Alert>Congratulations {winner.winnerName}! You have earned yourself the {winner.toy} Toy!</Alert>}
        {/* <input id="test" type="text" required /> */}
        <FormGroup>
          <Label>Name</Label>
          <Input innerRef={nameInput} name="name" onChange={handleInput} />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input innerRef={emailInput} name="email" onChange={handleInput} />
        </FormGroup>
      </CardBody>
      <CardFooter>
        <Button disabled={disableButton} color="success" onClick={handleSubmit}>Roll the Dice!</Button>&nbsp;
        <Button color="secondary">Cancel</Button>
      </CardFooter>
    </Form>
  </Card>;
};

export default Giveaway;