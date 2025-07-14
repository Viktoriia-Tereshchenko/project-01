import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { User } from "../../types";

export const UserPage2 = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User | undefined>(undefined);
  const [message, setMessage] = useState("");

  const fetchUserById = async (id: string | undefined) => {
    try {
      const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
      if (!res.ok) {
        throw new Error("Failed to fetch user with status " + res.status);
      }
      const obj = await res.json();
      setUser(obj);
    } catch (err) {
      if (err instanceof Error) {
        setMessage(err.message);
      }
    }
  };

  useEffect(() => {
    fetchUserById(id);
  }, [id]);

  return (
    <div>
      {message ? <div>{message}</div> : <div>Карточка юзера {user?.name}</div>}
    </div>
  );
};
