import React, { Component } from "react";

import "./App.css";
import Navbar from "./components/navBar/Navbar";
import Main from "./components/main/main";
import Skills from "./components/skills";
import Projects from "./components/projects/projects";
import AboutMe from "./components/aboutme/aboutme";
import Footer from "./components/footer/footer";




// import Section from "./Components/Section";


class App extends Component {
render() {
    return (
      <div>
        <Navbar />
        <Main />
        <Projects/>
        <AboutMe/>
        <Footer/>
      </div>
    );
  }
}

export default App;
