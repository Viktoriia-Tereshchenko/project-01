import { useEffect, useState } from "react";
import type { User } from "../../types";
import { Link } from "react-router-dom";
import styles from "./UsersList.module.css";
import avatar from "../../assets/avatar.jpg";

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
    <>
      <h2>Our favorite users</h2>
      <div className={styles.container}>
        {users.map((user) => (
          <div key={"user" + user.id}>
            <h4>{user.email}</h4>
            <Link to={`/users/${user.id}`}>
              <img
                src={user.avatar}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = avatar;
                }}
                alt="user avatar"
                className={styles.avatarImg}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

//➡️
