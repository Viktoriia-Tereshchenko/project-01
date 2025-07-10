import { useState } from "react";
import styles from "./SpaceMissionForm.module.css";

export default function SpaceMissionForm() {
  const [name, setName] = useState<string>("");
  const [planet, setPlanet] = useState<string>("Mercury");
  const [message, setMessage] = useState<string>("");

  function startMission() {
    if (name !== "") {
      setMessage(`🧑‍🚀Astronaut ${name} is headed to ${planet}!`);
    } else {
      setMessage("Please enter your name to begin your mission!");
    }
  }

  return (
    <div className={styles.smform}>
      <h2>Space Mission</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={styles.inp}
        />
      </label>

      <select
        name="planet"
        value={planet}
        onChange={(event) => setPlanet(event.target.value)}
      >
        <option value="Mercury">Mercury</option>
        <option value="Venus">Venus</option>
        <option value="Earth">Earth</option>
        <option value="Mars">Mars</option>
        <option value="Jupiter">Jupiter</option>
        <option value="Saturn">Saturn</option>
        <option value="Uranus">Uranus</option>
        <option value="Neptune">Neptune</option>
      </select>

      <button type="button" onClick={startMission}>
        start
      </button>

      <h3>{message}</h3>
    </div>
  );
}
