import { useContext } from "react";
import {
  CounterContext,
  type CounterContextType,
} from "../context/CounterContext";

export const useCounter = (): CounterContextType => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }

  return context;
};
