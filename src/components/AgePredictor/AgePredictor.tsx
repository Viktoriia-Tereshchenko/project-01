import { useEffect, useState } from "react";

export const AgePredictor = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [nameErrorMessage, setNameErrorMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  function validate(name: string): boolean {
    if (name.length >= 3) {
      setNameErrorMessage("");
      return true;
    }
    setNameErrorMessage("Name should be at least 3 symbols long");
    return false;
  }

  async function fetchAge(name: string) {
    try {
      const res = await fetch(`https://api.agify.io/?name=${name}`);
      if (res.status === 429) {
        throw Error("Too many requests. Please wait!");
      }
      const obj = await res.json();
      setAge(obj.age);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      }
    }
  }

  useEffect(() => {
    if (validate(name)) {
      fetchAge(name);
    }
  }, [name]);

  return (
    <section>
      <h2>AgePredictor</h2>
      <p style={{ color: "red" }}>{nameErrorMessage}</p>
      {errorMessage ? <p>{errorMessage}</p> : null}
      {/* <p style={{ color: "orange" }}>{errorMessage}</p> */}
      <input
        type="text"
        placeholder="Enter yout name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {nameErrorMessage ? null : (
        <div>
          Estimated age is {age} for name {name}
        </div>
      )}
    </section>
  );
};
