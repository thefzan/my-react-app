import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Body from "./Body";
import About from "./pages/About";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

