import { useCounter } from "../../hooks/useCounter";

export const Counter = () => {
  // tuple - кортеж
  // state, local state - состояние
  // setter function - функция сеттер
  //const [counter, setCounter] = useState<number>(0);

  const { counter, increment, decrement, reset } = useCounter(15);

  return (
    <div className="bg-[#e8e4e4] border border-stone-200 rounded-lg p-5 flex flex-row justify-start items-center text-center shadow-md gap-4 w-[500px] mx-auto my-5">
      {/* className="bg-[#e8e4e4] border-none rounded-lg p-4 flex flex-col justify-start items-center text-center shadow-md gap-2 w-150 mx-auto my-5"> */}

      <h2>Counter: {counter}</h2>
      <button
        type="button"
        onClick={decrement}
        className="w-24 h-12 rounded-lg bg-[#724545] text-white font-bold cursor-pointer shadow-md"
      >
        -1
      </button>
      <button
        type="button"
        onClick={increment}
        className="w-24 h-12 rounded-lg bg-[#724545] text-white font-bold cursor-pointer shadow-md"
      >
        +1
      </button>
      <button
        type="button"
        onClick={reset}
        className="w-24 h-12 rounded-lg bg-[#724545] text-white font-bold cursor-pointer shadow-md"
      >
        reset
      </button>
    </div>
  );
};
