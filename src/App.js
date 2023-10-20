import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact.jsx";
import Work from "./components/Work/Work.jsx";
import Skills from "./components/Skills/Skills"
import Welcome from "./components/Welcome/Welcome.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/skills" element={<Skills />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/work" element={<Work />} />
      <Route exact path="/" element={<Welcome />} />

      
      </Routes>
    </div>
  );
}

export default App;
