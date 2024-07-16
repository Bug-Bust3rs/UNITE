import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import ProfileSetup from "./components/ProfileSetup";
import Register from "./components/Register";
import ForgotPassword from "./components/Forgot-Password";


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

      
      </Routes>

    </>
  );
}

export default App;
