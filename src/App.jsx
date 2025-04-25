import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Pethub from "./Components/Pethub";
import Routine from "./Components/Routine";
import Events from "./Components/Events"; // Make sure this exists

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pethub" element={<Pethub />} />
        <Route path="/routine" element={<Routine />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;


