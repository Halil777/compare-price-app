import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Courses from "./pages/Courses";
import Experts from "./pages/Experts";
import Features from "./pages/Features";
import Home from "./pages/Home";
import Registration from "./pages/Registration";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Features />
      <Courses />
      <Registration />
      <Experts />
      <Footer />
    </div>
  );
}

export default App;
