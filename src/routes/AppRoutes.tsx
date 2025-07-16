import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import { ROUTES } from "../components/constants/routes";
import Registration from "../pages/Registration/Registration";
import { GenderPredictor } from "../components/GenderPredictor/GenderPredictor";
import { AgePredictor } from "../components/AgePredictor/AgePredictor";
import { Counter } from "../components/Counter/Counter";
import SpaceMissionForm from "../components/SpaceMissionForm/SpaceMissionForm";
import NotFound from "../pages/NotFound/NotFound";
import { AccountLayout } from "../layout/AccountLayout";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import AccountSettings from "../components/AccountSettings/AccountSettings";
import { ProductsList } from "../pages/ProductsList/ProductsList";
import ProductPage from "../pages/ProductPage/ProductPage";
import UsersList from "../pages/UsersList/UsersList";
import UserPage from "../pages/UserPage/UserPage";
import { UsersList2 } from "../components/UsersList2/UsersList2";
import { UserPage2 } from "../pages/UserPage2/UserPage2";
import Login from "../pages/Login/Login";
import { AddProduct } from "../pages/AddProduct/AddProduct";
import CreateProduct from "../pages/CreateProduct/CreateProduct";
import Gallery from "../components/Gallery/Gallery";
import ToggleCard from "../components/ToggleCard/ToggleCard";

// const userName = "our favourite user";
const myUrl = "https://developer.alexanderklimov.ru/android/java/sampleapp.jpg";
const profileName = "Anna Ivanova";
const aboutMe =
  "A desperate housewife and cat lover. Knits tiny hats for kittens in her free time.";
// const user = {
//   name: "test",
//   avatar: "test.img",
//   description: "test",
// };

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path={ROUTES.REGISTRATION} element={<Registration />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />

          <Route path={ROUTES.GENDER_PREDICTOR} element={<GenderPredictor />} />
          <Route path={ROUTES.AGE_PREDICTOR} element={<AgePredictor />} />
          <Route path={ROUTES.COUNTER} element={<Counter />} />
          <Route
            path={ROUTES.SPACE_MISSION_FORM}
            element={<SpaceMissionForm />}
          />

          <Route path={ROUTES.ACCOUNT} element={<AccountLayout />}>
            <Route
              path={ROUTES.ACCOUNT_SETTINGS}
              element={<AccountSettings />}
            />
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
              </Route> 
          <Route path="/account" element={<AccountLayout />}>
            <Route path="/account/settings" element={<AccountSettings />} />
            <Route path="/account/info" element={<AccountInfo />} />
          </Route>
          */}
          <Route path={ROUTES.ABOUT} element={<About />} />

          <Route path={ROUTES.PRODUCTS} element={<ProductsList />} />
          <Route path={"/products/:id"} element={<ProductPage />} />

          <Route path={ROUTES.ADD_PRODUCT} element={<AddProduct />} />
          <Route path={"product/add"} element={<CreateProduct />} />

          <Route path={ROUTES.USERS} element={<UsersList />} />
          <Route path={ROUTES.USER} element={<UserPage />} />

          <Route path={ROUTES.USERS2} element={<UsersList2 />} />
          <Route path={ROUTES.USERS2 + "/:id"} element={<UserPage2 />} />

          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path={"/gallery"} element={<Gallery />} />
          <Route path={"/toggle-card"} element={<ToggleCard />} />
        </Route>
      </Routes>
    </>
  );
}
