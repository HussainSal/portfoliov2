import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Work from "./components/Work/Work";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Work />
      <About />
      <Contact />
    </div>
  );
}

export default App;
