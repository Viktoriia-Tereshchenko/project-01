import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";

export const NavBar = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to={ROUTES.REGISTRATION}>Sign Up</Link>
        <Link to={ROUTES.GENDER_PREDICTOR}>Gender predictor</Link>
        <Link to="/age-predictor">Age predictor</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/pony">Pony</Link>
      </nav>
    </>
  );
};
