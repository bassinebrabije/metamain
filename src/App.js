import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from './component/Header';
import Home from './component/Home/home';
import About from './component/About/about';
import Courses from './component/Courses';
import Science from './component/Science';
import Reviews from './component/Reviews';
import Footer from './component/Footer';
import NotFound from './component/NotFound';
import TypewriterLoader from "./component/Home/loading";
import "./App.css";

// Scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

function App() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowLoader(true);
    }
  }, []);

  const handleLoaderFinished = () => {
    setShowLoader(false);
    sessionStorage.setItem('hasVisited', 'true');
  };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5550);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <TypewriterLoader />;
  }

  return (
    <Router>

      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/science" element={<Science />} />
        <Route path="/reviews" element={<Reviews />} />
        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
