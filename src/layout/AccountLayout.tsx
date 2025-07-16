import { Outlet } from "react-router-dom";
import { ROUTES } from "../components/constants/routes";
import { NavLink } from "react-router-dom";

export const AccountLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-2 gap-4">
      <h2>My account</h2>
      <nav className="flex justify-center items-center gap-8">
        <NavLink
          to={ROUTES.ACCOUNT_USER_INFO}
          className="text-sm font-bold text-orange-900 cursor-pointer"
        >
          User info
        </NavLink>
        <NavLink
          to={ROUTES.ACCOUNT_SETTINGS}
          className="text-sm font-bold text-orange-900 cursor-pointer"
        >
          Settings
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
};
