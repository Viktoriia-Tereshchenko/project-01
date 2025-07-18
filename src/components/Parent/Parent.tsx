import { cn } from "clsx-for-tailwind";
import { useCallback, useMemo, useState } from "react";
import AptonKid from "./AptonKind";
import Frederika from "./Frederika";

function getBall() {
  return { title: "Ball" };
}

export const Parent = () => {
  const [isBlue, setIsBlue] = useState(false);
  const [counter, setCounter] = useState<number>(0);

  console.log("Parent render");

  // используем useMemo для запоминания РЕЗУЛЬТАТА выполнения функции
  const ball = useMemo(getBall, []);

  // используем useCallback для запоминания ФУНКЦИИ в
  const paintGiraffe = useCallback(() => {
    console.log(`Paint of Giraffe ${isBlue}`);
  }, [isBlue]);

  // Когда происходит ререндер компонента
  // 1. Если меняю state компонента
  // 2. Если делаю рендер родителя - ререндер происходит у детей

  return (
    <div className="bg-amber-100 mx-3 my-3">
      <h2>Toggle Card</h2>

      <div
        className={cn("min-h-10 w-10 rounded shadow bg-amber-300 mx-5 my-5", {
          "bg-blue-200": isBlue,
        })}
      ></div>
      <button
        type="button"
        className="border-2 rounded bg-red-700 w-30 h-10  text-white"
        onClick={() => setIsBlue((prev) => !prev)}
      >
        Change color
      </button>
      <p>Counter: {counter}</p>
      <button
        type="button"
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      ></button>
      <button
        type="button"
        className="border-2 rounded bg-red-700 w-30 h-10 text-white"
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        +1
      </button>

      <AptonKid toy={ball} paint={paintGiraffe} />
      <Frederika />
    </div>
  );
};
