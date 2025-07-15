import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./providers/AuthProvider";
import { CounterProvider } from "./providers/CounterProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <CounterProvider>
            <AppRoutes />
          </CounterProvider>
        </AuthProvider>
      </BrowserRouter>

      {/* <ProfileCard {...user} /> */}
    </>
  );
}

export default App;
