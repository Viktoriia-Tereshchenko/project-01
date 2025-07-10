import "./App.css";
import { Counter } from "./components/Counter/Counter";
import { AgePredictor } from "./components/AgePredictor/AgePredictor";
import { GenderPredictor } from "./components/GenderPredictor/GenderPredictor";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import { MainLayout } from "./layout/MainLayout";
// import { PonyLayout } from "./layout/PonyLayout";
// import MyPony from "./components/pony/MyPony/MyPony";
// import BuyPony from "./components/pony/BuyPony/BuyPony";
import { ROUTES } from "./components/constants/routes";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import { AccountLayout } from "./layout/AccountLayout";

function App() {
  // const userName = "our favourite user";
  const myUrl =
    "https://developer.alexanderklimov.ru/android/java/sampleapp.jpg";
  const profileName = "Anna Ivanova";
  const aboutMe =
    "A desperate housewife and cat lover. Knits tiny hats for kittens in her free time.";
  // const user = {
  //   name: "test",
  //   avatar: "test.img",
  //   description: "test",
  // };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />

            <Route path={ROUTES.REGISTRATION} element={<Registration />} />
            <Route
              path={ROUTES.GENDER_PREDICTOR}
              element={<GenderPredictor />}
            />
            <Route path={ROUTES.AGE_PREDICTOR} element={<AgePredictor />} />
            <Route path={ROUTES.COUNTER} element={<Counter />} />
            <Route
              path={ROUTES.SPACE_MISSION_FORM}
              element={<SpaceMissionForm />}
            />

            <Route path={ROUTES.ACCOUNT} element={<AccountLayout />}>
              <Route path={ROUTES.ACCOUNT_SETTINGS} element={<NotFound />} />
              <Route
                path={ROUTES.ACCOUNT_USER_INFO}
                element={
                  <ProfileCard
                    name={profileName}
                    avatar={myUrl}
                    description={aboutMe}
                  />
                }
              />
            </Route>

            {/* <Route path="/pony" element={<PonyLayout />}>
              <Route path="/pony/my-pony" element={<MyPony />} />
              <Route path="/pony/buy-pony" element={<BuyPony />} />
            </Route> */}

            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <ProfileCard {...user} /> */}
    </>
  );
}

export default App;
