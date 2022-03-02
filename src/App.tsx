import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Work from "./components/Work/Work";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);

  return (
    <div className="App">
      {loading ? (
        <div className="loader">
          <ClimbingBoxLoader color={"#0EE6B7"} loading={loading} size={25} />
        </div>
      ) : (
        <Fragment>
          <Navigation />
          <Header />
          <Work />
          <About />
          <Contact />
        </Fragment>
      )}
    </div>
  );
}

export default App;
