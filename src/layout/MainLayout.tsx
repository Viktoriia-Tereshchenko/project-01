import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";

export const MainLayout = () => {
  return (
    <>
      {/* навигация */}
      <header>
        <NavBar />
      </header>

      {/* сюда будут подставляться наши Route */}
      <Outlet />

      <footer style={{ margin: "50px" }}>
        {/* для внешнего сайта - обычные ссылки */}
        <a href="">Instagram📱</a>
      </footer>
    </>
  );
};
