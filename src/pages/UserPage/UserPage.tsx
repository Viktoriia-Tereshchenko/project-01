import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { User } from "../../types";
import styles from "./UserPage.module.css";

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
    <div className={styles.container}>
      <h2>User Page</h2>
      <h3>{user?.name}</h3>
      <h4>{user?.email}</h4>
      <img src={user?.avatar} alt="avatar" />
      <p>{user?.role}</p>
    </div>
  );
}
