// special component containing all the possible routes for this app
// any props passed into AppRoutes will also be passed onto
// child components using {...props}
import { Route, Routes } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import BitcoinRates from "../components/BitcoinRates";
import HomePage from "../pages/HomePage";
// import ProtectedRoute from "./ProtectedRoutes";

function AppRoutes(props) {
  return (
    <Routes>
      <Route path="HomePage" element={<HomePage {...props} />} />
      <Route path="login" element={<LoginForm {...props} />} />
      <Route path="BitcoinRates" element={<BitcoinRates {...props} />}></Route>
    </Routes>
  );
}

export default AppRoutes;
