import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <>
      <nav className={styles.navigation}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to={ROUTES.REGISTRATION} className={styles.link}>
          Sign Up
        </Link>
        <Link to={ROUTES.GENDER_PREDICTOR} className={styles.link}>
          Gender predictor
        </Link>
        <Link to={ROUTES.AGE_PREDICTOR} className={styles.link}>
          Age predictor
        </Link>
        <Link to={ROUTES.COUNTER} className={styles.link}>
          Counter
        </Link>
        <Link to={ROUTES.SPACE_MISSION_FORM} className={styles.link}>
          Space mission
        </Link>
        <Link to={ROUTES.ACCOUNT} className={styles.link}>
          Account
        </Link>
        <Link to={ROUTES.ABOUT} className={styles.link}>
          About
        </Link>
        <Link to={ROUTES.CONTACT} className={styles.link}>
          Contact
        </Link>
      </nav>
    </>
  );
};
