import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// COmponents
import Navbar from "./components/layouts/Navbar";
import Apod from "./components/apod/Apod";
import Home from "./components/pages/Home";
import Neos from "./components/neos/Neos";
import About from "./components/pages/About";
import Mars from "./components/mars/Mars";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/apod" component={Apod} />
          <Route path="/neos" component={Neos} />
          <Route path="/about" component={About} />
          <Route path="/mars" component={Mars} />
        </Switch>
        {/* <Cards /> */}
      </div>
      <Footer />
    </Router>
  );
}

export default App;
