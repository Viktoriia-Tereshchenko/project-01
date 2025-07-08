import { useState } from "react";
import styles from "./Counter.module.css"; // classes

export const Counter = () => {
  const initialValue = 0;
  const [counter, setCounter] = useState<number>(0);
  // tuple - кортеж
  // state, local state - состояние
  // setter function - функция сеттер

  function handlePlus() {
    //setCounter(counter + 1);
    setCounter((prev) => prev + 1);
    //console.log(counter);
  }

  function handleMinus() {
    setCounter((prev) => prev - 1);
  }

  const handleReset = () => {
    setCounter(initialValue);
  };

  return (
    <div className={styles.counterCard}>
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
