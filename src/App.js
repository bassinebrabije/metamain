import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './component/Header'
import Home from './component/pages/home'
import About from './component/about'
import Courses from './component/Courses'
import Science from './component/Science'
import Reviews from './component/Reviews'
import Footer from './component/Footer'
import "./App.css";



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/science" element={<Science />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
