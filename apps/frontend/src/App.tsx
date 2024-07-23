import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/homepage/Home";
import Navbar from "./components/ui/Navbar";
import Login from "./components/auth/Login";
import ProfileSetup from "./components/profile/ProfileSetup";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/Forgot-Password";
import Feed from "./components/feed/Feed";
import OTP from "./components/auth/OTP";
import { ThemeProvider } from "./context/ThemeCOntext";

import Footer from "./components/ui/Footer";
import Contact from "./components/ui/Contact";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {

  const { state } = useAuthContext();
  console.log(state);
  
  return (
    <>
      
        <ThemeProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={!state.user ? <Home /> : <Navigate to="/feeds" />} />
            <Route path="/feeds" element={state.user ? <Feed/> : <Navigate to="/login" />} />
            <Route path="/login" element={!state.user ? <Login /> : <Navigate to="/" />} />
            <Route path="/register" element={!state.user ? <Register /> : <Navigate to="/" />} />
            <Route path="/profile" element={state.user ? <ProfileSetup /> : <Navigate to="/login" />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/otp/:userId" element={<OTP />} />
            <Route path="/contact" element={state.user ? <Contact /> : <Navigate to="/login" />} />
          </Routes>
        </ThemeProvider>
        <Footer />
      
    </>
  );
}

export default App;
