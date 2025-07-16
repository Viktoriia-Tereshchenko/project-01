import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import styles from "./NavBar.module.css";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useCounter } from "../../hooks/useCounter";

export const NavBar = () => {
  const classSelector = ({ isActive }: { isActive: boolean }) => {
    return isActive ? "nav-link-active" : "nav-link";
  };

  const { user, setIsAuthorized, isAuthorized } = useCurrentUser();
  const { counter } = useCounter();

  function handleLogout(): void {
    setIsAuthorized(false);
  }

  return (
    <>
      {/* <nav className={styles.navigation}> */}
      <nav className="flex justify-center items-center gap-4 flex-wrap bg-pink-200 min-h-14 p-6">
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
        <NavLink to={"/gallery"}>Gallery</NavLink>
        <NavLink to={"/toggle-card"}>ToggleCard</NavLink>
        {/* отображение в header */}
        <p className={styles.navContext}>{user?.email}</p>
        <p className={styles.navContext}>{counter}</p>
        {isAuthorized ? (
          <button type="button" onClick={handleLogout} className={styles.btn}>
            Logout
          </button>
        ) : null}
      </nav>
    </>
  );
};
