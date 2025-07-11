import "./App.css";
import { BrowserRouter } from "react-router-dom";

// import { PonyLayout } from "./layout/PonyLayout";
// import MyPony from "./components/pony/MyPony/MyPony";
// import BuyPony from "./components/pony/BuyPony/BuyPony";

import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>

      {/* <ProfileCard {...user} /> */}
    </>
  );
}

export default App;
