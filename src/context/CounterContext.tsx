import { createContext } from "react";

export interface CounterContextType {
  counter: number;
  setCounter: (counter: number) => void;
}

export const CounterContext = createContext<CounterContextType | undefined>(
  undefined
);
