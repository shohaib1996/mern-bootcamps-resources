import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import { createContext, useState } from "react";
import PrviateRoute from "./components/shared/PrviateRoute";

export const UserContext = createContext();

function App() {
  const [token, setToken] = useState(
    localStorage.getItem("user-token") || null
  );
  return (
    <UserContext.Provider value={{ token, setToken }}>
      <Routes>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route
          path="/profile"
          element={<PrviateRoute element={<Profile />} />}
        ></Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
