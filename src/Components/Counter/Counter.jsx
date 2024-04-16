import { useState } from "react";
import Button from "../Button/Button";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () =>{
    let newCount = counter + 1;
    setCounter(newCount);
    console.log(counter);
  }
  const handleDecrement = () =>{
    let newCount = counter - 1;
    setCounter(newCount);
    console.log(counter);
  }
  const handleReset = () =>{
    setCounter(0);
    console.log("Counter is set to 0");
  }
  return (
    <div className="shadow-md w-96 p-8 m-4 rounded-md border-blue-500 border-2 mx-auto">
      <h2 className="text-center font-semibold text-2xl">Counter: {counter}</h2>
      <div className="flex flex-col md:flex-row gap-2 my-4 mx-auto justify-center">
      <Button btnColor="bg-violet-500" onClickHandler={handleIncrement}>increment</Button>
      <Button btnColor="bg-orange-500" onClickHandler={handleDecrement}>decrement</Button>
      <Button btnColor="bg-green-500" onClickHandler={handleReset}>Reset</Button>
      </div>
    </div>
  );
};

export default Counter;
