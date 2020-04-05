import React, { Component } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/main";
import Skills from "./components/skills";
import Projects from "./components/projects/projects";
import AboutMe from "./components/aboutme";




// import Section from "./Components/Section";


class App extends Component {
render() {
    return (
      <div>
        <Navbar />
        <Main />
        <AboutMe/>
        <Skills />
        <Projects/>
       
        
       

      </div>
    );
  }
}

export default App;
