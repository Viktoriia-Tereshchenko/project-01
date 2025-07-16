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
    <div className="flex flex-col items-center justify-center mt-2">
      <input
        type="text"
        value={name}
        // event.target - это сам input
        onChange={(e) => setName(e.target.value)}
        className="rounded border-none h-6 my-1 mx-5 w-50 text-center bg-stone-100"
      />
      <button
        type="button"
        onClick={() => handleRevealGender()}
        className="w-36 h-12 rounded-lg bg-[#724545] text-white font-bold cursor-pointer shadow-md"
      >
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
