import React, { useState } from "react";
import { Button } from "react-bootstrap";

function CounterApp () {
  /******Variable to hold the counter value and update ********/
  const [counter, setCounter] = useState(0);
  /******Variable increse the value by 1********/
  const incrementCounter = () => {
    // setCounter(counterValue = counterValue + 1);
    setCounter(counter + 1);
  }
    /******Variable decrese the value by 1********/
    const decrementCounter = () => {
      if (counter > 0) {
        setCounter(counter - 1);
      }
      else {
        alert('Counter value should be more than 0')
      }
    }
    /**********Reset counter value********/
    const resetCounter = () => {
      setCounter(0)
    }
    return (
      <>
        <div className="counterWrapper d-flex align-items-center">
          <div className="border w-25 bg-dark text-white py-2 rounded-2">Counter : {counter}</div>
          <div className="d-flex w-75 ps-3 align-items-center">
            <Button variant="primary" onClick={incrementCounter} className="text-white px-2">+</Button>
            <Button variant="primary" onClick={decrementCounter} className="text-white px-2 mx-2">-</Button>
            <Button variant="primary" onClick={resetCounter} className="text-white">Reset</Button>
          </div>
        </div>
      </>
    );
}
export default CounterApp;