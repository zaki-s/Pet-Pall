import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
import Navbar from "./component/Navbar"; // ✅ Corrected (no "s")
=======
import Navbar from "./component/Navbar";
>>>>>>> 9f5798e (Added login functionality)
import Pet from "./Pages/Pet";
import Routine from "./Pages/Routine";
import Events from "./Pages/Events";
import Profiles from "./Pages/Profiles";
import PetsHub from "./Pages/PetsHub";
import Login from "./component/Login"; // Capitalized
import SignUp from "./component/SignUp";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Profiles />} />
          <Route path="/pets" element={<Pet />} />
          <Route path="/routines" element={<Routine />} />
          <Route path="/events" element={<Events />} />
          <Route path="/petshub" element={<PetsHub />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
  );
}

export default App;



