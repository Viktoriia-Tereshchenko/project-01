import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { User } from "../../types";

export default function UserPage() {
  const { userId } = useParams();
  const [user, setUser] = useState<User | undefined>(undefined);

  async function fetchUser(userId: string | undefined) {
    try {
      const res = await fetch(
        `https://api.escuelajs.co/api/v1/users/${userId}`
      );

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const obj = await res.json();
      setUser(obj);
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error("Something went wrong:", e.message);
      }
    }
  }

  useEffect(() => {
    fetchUser(userId);
  }, [userId]);

  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <h2>User Page</h2>
      <div className="bg-[#e8e4e4] border-none rounded-lg p-4 flex flex-col justify-start items-center text-center shadow-md gap-2 w-150 mx-auto my-5">
        <h3>{user?.name}</h3>
        <h4>{user?.email}</h4>
        <img src={user?.avatar} alt="avatar" className="w-72 rounded-lg" />
        <p>{user?.role}</p>
      </div>
    </div>
  );
}
