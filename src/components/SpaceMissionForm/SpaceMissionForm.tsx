import { useState } from "react";
import Planet from "./planet-option";

export const SpaceMissionForm = () => {
  const [fullName, setFullName] = useState<string>(""); //useState<string | undefined>(undefined);
  const [planet, setPlanet] = useState<string>(Planet.MARS);

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
        <option value={Planet.MARS}>{Planet.MARS}</option>
        <option value={Planet.VENUS}>{Planet.VENUS}</option>
        <option value={Planet.JUPITER}>{Planet.JUPITER}</option>
        <option value={Planet.SARURN}>{Planet.SARURN}</option>
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
