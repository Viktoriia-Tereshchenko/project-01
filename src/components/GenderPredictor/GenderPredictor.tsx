import { useState } from "react";

interface NameInfo {
  name: string;
  gender: string;
  country: string;
  probability: number;
  remaining_credits: number;
}
// const key = "686f7aa3b71c8089bf645a88";
const key = import.meta.env.VITE_GENDER_API_KEY;

export const GenderPredictor = () => {
  const [name, setName] = useState<string>("Fred");
  const [nameInfo, setNameInfo] = useState<NameInfo | undefined>(undefined);

  function handleRevealGender() {
    fetchGender(name);
  }

  const fetchGender = async (name: string) => {
    const res = await fetch(
      `https://api.genderapi.io/api/?key=${key}?name=${name}`
    );
    const resObj = await res.json();
    setNameInfo(resObj);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        // event.target - это сам input
        onChange={(e) => setName(e.target.value)}
      />
      <button type="button" onClick={() => handleRevealGender()}>
        Reveal gender
      </button>
      {nameInfo ? (
        <div>
          <span>Name: {nameInfo.name}</span>
          <span>Gender: {nameInfo.gender}</span>
          <span>Country: {nameInfo.country}</span>
          <span>Probability: {nameInfo.probability}</span>
          <span>Remaining credits: {nameInfo.remaining_credits}</span>
        </div>
      ) : null}
    </div>
  );
};
