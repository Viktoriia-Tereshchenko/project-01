import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import styles from "./NavBar.module.css";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useCounter } from "../../hooks/useCounter";

export const NavBar = () => {
  const classSelector = ({ isActive }: { isActive: boolean }) => {
    return isActive ? "nav-link-active" : "nav-link";
  };

  const { user } = useCurrentUser();
  const { counter } = useCounter();

  return (
    <>
      <nav className={styles.navigation}>
        <NavLink to="/" className={classSelector}>
          Home
        </NavLink>
        <NavLink to={ROUTES.REGISTRATION} className={classSelector}>
          Sign Up
        </NavLink>
        <NavLink to={ROUTES.LOGIN} className={classSelector}>
          Sign In
        </NavLink>
        <NavLink to={ROUTES.GENDER_PREDICTOR} className={classSelector}>
          Gender predictor
        </NavLink>
        <NavLink to={ROUTES.AGE_PREDICTOR} className={classSelector}>
          Age predictor
        </NavLink>
        <NavLink to={ROUTES.COUNTER} className={classSelector}>
          Counter
        </NavLink>
        <NavLink to={ROUTES.SPACE_MISSION_FORM} className={classSelector}>
          Space mission
        </NavLink>
        <NavLink to={ROUTES.ACCOUNT} className={classSelector}>
          Account
        </NavLink>
        <NavLink to={ROUTES.PRODUCTS} className={classSelector}>
          Products
        </NavLink>
        <NavLink to={ROUTES.ADD_PRODUCT} className={classSelector}>
          Add product
        </NavLink>
        {/* <NavLink to={"product/add"} className={classSelector}>
          Create product
        </NavLink> */}
        <NavLink to={ROUTES.USERS} className={classSelector}>
          Users
        </NavLink>
        {/* <NavLink to={ROUTES.USERS2} className={classSelector}>
          Users2
        </NavLink> */}
        <NavLink to={ROUTES.ABOUT} className={classSelector}>
          About
        </NavLink>
        <NavLink to={ROUTES.CONTACT} className={classSelector}>
          Contact
        </NavLink>
        {/* отображение в header */}
        <p className={styles.navContext}>{user?.email}</p>
        <p className={styles.navContext}>{counter}</p>
      </nav>
    </>
  );
};
