import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import Career from "./Pages/Career";


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
