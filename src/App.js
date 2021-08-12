import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";

import { LandingPage } from "./core/components/LandingPage/LandingPage";
import { Experiences } from "./core/components/Experiences/Experiences";
import { Projects } from "./core/components/Projects/Projects";
import { Contact } from "./core/components/Contact/Contact";
import { Resume } from "./core/components/Resume/Resume";
import { Header } from "./core/components/UI/Header/Header";
import "./App.css";

const App = (props) => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/contact">
            <Header></Header>
            <Contact></Contact>
          </Route>
          <Route path="/resume">
            <Header></Header>
            <Resume></Resume>
          </Route>
          <Route path="/experience">
            <Header></Header>
            <Projects></Projects>
          </Route>
          <Route path="/skills">
            <Header></Header>
            <Experiences></Experiences>
          </Route>
          <Route path="/">
            <LandingPage></LandingPage>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
