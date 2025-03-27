import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import AboutUs from "./AboutUs";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";
import Fruits from "./Fruits";
import Vegetables from "./Vegetables";
import Cart from "./Cart";
import Beverages from "./Beverages";
import Chocolates from "./Chocolates";


const isAuthenticated = () => localStorage.getItem("isAuthenticated") === "true";

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/fruits" element={<ProtectedRoute><Fruits /></ProtectedRoute>} />
      <Route path="/vegetables" element={<ProtectedRoute><Vegetables /></ProtectedRoute>} />
      <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
      <Route path="/beverages" element={<ProtectedRoute><Beverages /></ProtectedRoute>} />
      <Route path="/chocolate" element={<ProtectedRoute><Chocolates /></ProtectedRoute>} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
