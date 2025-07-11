import { Outlet } from "react-router-dom";
import { ROUTES } from "../components/constants/routes";
import styles from "./AccountLayout.module.css";
import { NavLink } from "react-router-dom";

export const AccountLayout = () => {
  return (
    <>
      <h2>My account</h2>
      <nav className={styles.navigation}>
        <NavLink to={ROUTES.ACCOUNT_USER_INFO} className={styles.link}>
          User info
        </NavLink>
        <NavLink to={ROUTES.ACCOUNT_SETTINGS} className={styles.link}>
          Settings
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
};
