import { Route, Routes } from "react-router-dom";
import Home from "./components/homepage/Home";
import Navbar from "./components/Navbar";
import Login from "./components/auth/Login";
import ProfileSetup from "./components/ProfileSetup";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/Forgot-Password";
import OTP from "./components/auth/OTP";
import { ThemeProvider } from "./context/ThemeCOntext";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ProfileSetup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp" element={<OTP />} />


        </Routes>
      </ThemeProvider>
      <Footer/>
    </>
  );
}

export default App;
