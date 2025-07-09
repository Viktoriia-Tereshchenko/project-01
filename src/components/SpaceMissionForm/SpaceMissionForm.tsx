import { useState } from "react";
import option from "./planet-option";

export const SpaceMissionForm = () => {
  const [fullName, setFullName] = useState<string>(""); //useState<string | undefined>(undefined);
  const [planet, setPlanet] = useState<string>(option.MARS);

  return (
    <div>
      <input
        type="text"
        value={fullName}
        onChange={(event) => setFullName(event.target.value)}
      />

      <select
        value={planet}
        onChange={(event) =>
          //setPlanet(Planet[event.target.value as keyof typeof Planet])
          setPlanet(event.target.value)
        }
      >
        <option value={option.MARS}>{option.MARS}</option>
        <option value={option.VENUS}>{option.VENUS}</option>
        <option value={option.JUPITER}>{option.JUPITER}</option>
        <option value={option.SARURN}>{option.SARURN}</option>
      </select>

      {/* тернарный оператор */}
      {fullName ? (
        <p>
          🧑‍🚀 Astronaut {fullName} is headed to {planet}!
        </p>
      ) : (
        <p>Please enter your name to begin your mission.</p>
      )}
    </div>
  );
};
