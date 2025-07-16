import { useState } from "react";
import spaceImg from "../../assets/space.jpg";

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
    <div
      className="bg-[url('../../assets/space.jpg')] bg-cover bg-center w-150 h-100 my-5 mx-[30%] p-5 rounded-lg flex flex-col justify-center items-center gap-5 shadow-md text-white"
      style={{ backgroundImage: `url(${spaceImg})` }}
    >
      <h2 className="text-white font-bold">Space Mission</h2>
      <label className="text-[#682e11]">
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-50 h-6 bg-white text-black text-center"
        />
      </label>

      <select
        name="planet"
        value={planet}
        className="bg-white text-black"
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

      <button
        type="button"
        onClick={startMission}
        className="w-36 h-12 rounded-lg bg-[#724545] text-white font-bold cursor-pointer shadow-md"
      >
        start
      </button>

      <p className="text-white font-bold">{message}</p>
    </div>
  );
}
