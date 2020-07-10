import React from "react";
import { Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Home from "./components/index";
import Aboutme from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/aboutme" component={Aboutme} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </>
  );
};

export default App;
