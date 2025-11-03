import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Body from "./Body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Footer from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Nav />
      
      <Routes>
        <Route path="/" element={<Body />}/>
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
