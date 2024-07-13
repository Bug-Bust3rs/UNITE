import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route
          path="/"
          element={ <Home />}
        />
      </Routes>
      <Login/>
    </>
  );
}

export default App;
