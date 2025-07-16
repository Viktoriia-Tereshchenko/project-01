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

      <footer className="flex flex-col items-center justify-center mt-10 text-pink-950 text-shadow-md">
        {/* для внешнего сайта - обычные ссылки */}
        <a href="">Instagram📱</a>
      </footer>
    </>
  );
};
