import { createContext } from "react";

export interface CounterContextType {
  counter: number;
  //setCounter: (counter: number) => void;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

export const CounterContext = createContext<CounterContextType | undefined>(
  undefined
);
