import { useEffect, useState } from "react";
import type { User } from "../../types";
import { Link } from "react-router-dom";
import styles from "./UsersList.module.css";

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/users");

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const obj = await res.json();
      setUsers(obj);
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error("Something went wrong:", e.message);
      }
    }
  }

  return (
    <div>
      <h2>Our favorite users</h2>
      <ul className={styles.usersList}>
        {users.map((user) => (
          <li key={"user" + user.id}>
            <h4>
              {user.email}
              <Link to={`/users/${user.id}`}>➡️</Link>
            </h4>
          </li>
        ))}
      </ul>
    </div>
  );
}
