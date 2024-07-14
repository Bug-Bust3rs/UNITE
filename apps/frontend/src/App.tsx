import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import ProfileSetup from "./components/ProfileSetup";


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
        <Route path="/profile" element={ <ProfileSetup/> }/>
      </Routes>

    </>
  );
}

export default App;
