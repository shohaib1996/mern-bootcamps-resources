import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrviateRoute = ({ element }) => {
  const token = localStorage.getItem("user-token");
  return token ? element : <Navigate to="/sign-in" />;
};

export default PrviateRoute;
