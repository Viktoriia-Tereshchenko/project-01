import { useEffect, useState } from "react";
import type { User } from "../../types";
import { Link } from "react-router-dom";
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
    <div className="flex flex-col items-center justify-center mt-2 gap-4">
      <h2>Our favorite users</h2>
      <div className="grid grid-cols-3 bg-[#e8e4e4] p-4 gap-4 rounded-lg w-4/5">
        {users.map((user) => (
          <div
            key={"user" + user.id}
            className="h-24 col-span-1 flex flex-col items-center justify-center"
          >
            <h4>{user.email}</h4>
            <Link to={`/users/${user.id}`}>
              <img
                src={user.avatar}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = avatar;
                }}
                alt="user avatar"
                className="rounded-full w-16 h-16"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

//➡️
