import React, { Component } from "react";
import Section from "../Section";
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value:50,
      density: {
        enable: true,
        value_area:600
      }
    }
  }
}

class AboutMe extends Component {

    render() {
      return (
          <div className = "aboutme-wrapper">
              <Section id="Aboutme"/>
                <div className = 'Aboutme-box'>
                  <h1 className ='aboutme-title'>Whats up!! Im Andrew, Nice to meet you.</h1>
                  <p className='aboutme-descrip'> Full stack developer, I love making simple yet aesthetically awesome
                    Web apps and websites, In general I love technology.
                    Fully responsive technolgy to meet eyecatching UI without sacraficing
                    UX fucntionality is the goal of what I do.

                  </p>
                </div>

                
                <Particles className='particles'
           params={particlesOptions}/>   
            </div>       
                 
        
      );
    }
  }

  export default AboutMe; 

