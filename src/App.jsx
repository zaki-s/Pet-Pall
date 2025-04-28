import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar"; // ✅ Corrected (no "s")
import Pet from "./Pages/Pet";
import Routine from "./Pages/Routine";
import Events from "./Pages/Events";
import Profiles from "./Pages/Profiles";
import PetsHub from "./Pages/PetsHub";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Profiles />} />
          <Route path="/pets" element={<Pet />} />
          <Route path="/routines" element={<Routine />} />
          <Route path="/events" element={<Events />} />
          <Route path="/petshub" element={<PetsHub />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



