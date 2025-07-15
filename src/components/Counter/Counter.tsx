//import { useState } from "react";
import styles from "./Counter.module.css"; // classes
import { useCounter } from "../../hooks/useCounter";

export const Counter = () => {
  const initialValue = 0;

  //const [counter, setCounter] = useState<number>(0);
  const { counter, setCounter } = useCounter();

  // tuple - кортеж
  // state, local state - состояние
  // setter function - функция сеттер

  function handlePlus() {
    //setCounter((prev) => prev + 1);
    setCounter(counter + 1);
  }

  function handleMinus() {
    //setCounter((prev) => prev - 1);
    setCounter(counter - 1);
  }

  const handleReset = () => {
    setCounter(initialValue);
  };

  return (
    <div className={styles.container}>
      <h2>Counter: {counter}</h2>
      <button type="button" onClick={handleMinus}>
        -1
      </button>
      <button type="button" onClick={handlePlus}>
        +1
      </button>
      <button type="button" onClick={handleReset}>
        reset
      </button>
    </div>
  );
};
