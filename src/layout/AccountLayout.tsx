import { Link, Outlet } from "react-router-dom";
import { ROUTES } from "../components/constants/routes";
import styles from "./AccountLayout.module.css";

export const AccountLayout = () => {
  return (
    <div>
      <h2>My account</h2>
      <nav className={styles.navigation}>
        <Link to={ROUTES.ACCOUNT_USER_INFO} className={styles.link}>
          User info
        </Link>
        <Link to={ROUTES.ACCOUNT_SETTINGS} className={styles.link}>
          Settings
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};
