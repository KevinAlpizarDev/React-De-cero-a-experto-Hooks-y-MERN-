import { useState, useEffect } from "react";

export const useCounter = (initialValue = 10) => {
  const storedValue = localStorage.getItem("counter");
  const [counter, setCounter] = useState(storedValue ? Number(storedValue) : initialValue);

  useEffect(() => {
    localStorage.setItem("counter", counter);
  }, [counter]);

  const increment = (value = 1) => {
    setCounter(counter + value);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  const decrement = (value = 1) => {
    counter >= 1 ? setCounter(counter - value) : setCounter(0);
  };

  return {
    counter,
    increment,
    reset,
    decrement,
  };
};
