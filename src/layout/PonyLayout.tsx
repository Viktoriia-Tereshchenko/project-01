import { Link, Outlet } from "react-router-dom";

export const PonyLayout = () => {
  return (
    <div>
      <h2>PonyLayout</h2>
      <nav>
        <Link to="/pony/my-pony">My pony</Link>
        <Link to="/pony/buy-pony">Buy pony</Link>
      </nav>
      <Outlet />
    </div>
  );
};
