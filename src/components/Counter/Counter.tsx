import styles from "./Counter.module.css"; // classes
import { useCounter } from "../../hooks/useCounter";

export const Counter = () => {
  // tuple - кортеж
  // state, local state - состояние
  // setter function - функция сеттер
  //const [counter, setCounter] = useState<number>(0);

  const { counter, increment, decrement, reset } = useCounter(15);

  return (
    <div className={styles.container}>
      <h2>Counter: {counter}</h2>
      <button type="button" onClick={decrement}>
        -1
      </button>
      <button type="button" onClick={increment}>
        +1
      </button>
      <button type="button" onClick={reset}>
        reset
      </button>
    </div>
  );
};
