import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import ProfileSetup from "./components/ProfileSetup";
import Register from "./components/Register";
import ForgotPassword from "./components/Forgot-Password";
import OTP from "./components/OTP";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={ <Register/> }/>
        <Route path="/profile" element={ <ProfileSetup/> } />
        <Route path="/forgot-password" element={ <ForgotPassword/> } />
        <Route path="/otp" element={ <OTP/> } />

      
      </Routes>

    </>
  );
}

export default App;
