import React, { Component } from "react";
import Section from "../../Section";
import profilePic from "../images/me -work.jpg"
import "./about.css"




class AboutMe extends Component {

    render() {
      return (
        <div  className="about-me-container">
          <Section id="Aboutme"/>
          <h1 className="about-me-title">About me</h1>
          <h2 className="about-me-subtitle"> Its nice to meet you!</h2>
        <div className = "about-me-grid">
        <div className=" avatar-grid">
        
          <img
          src={profilePic}
          alt="Avatar"
          className ="about-me-pic"
          />

          <h2 className="skills-title"> Skills</h2>

          <div className="skills-grid">
          <div>
            <h3 className="front-end-title">Front-End</h3>
            <ul className="front-end-skills">
          
              <li>HTML5</li>
              <li>CSS3/SASS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Redux</li>
              <li>Bootstrap 4</li>
            </ul>
          </div>
          <div>
            <h3 className="back-end-title">Back-end</h3>

            <ul className="front-end-skills">
          
            <li>Node.js,Express</li>
            <li>MongoDB</li>
            <li>SQL</li>
            <li>Postgresql</li>
      
            </ul>
          </div>
          
        </div>
        
        <h3 className="front-end-title">Tools</h3>

        <ul className="front-end-skills">
         
        <li>Git</li>
        <li>CI/CD</li>
        <li>postman</li>
        <li>Jest</li>
   
      </ul>

        


        </div>
          <div>
            <div className="about-me-descrip" >
            <p>
            I'm Andrew a Front end developer with 4 years of experience in Coding interactive websites for startups with both local and remote teams, I enjoy the fast- paced environment of the tech industry and being able to make a difference. 
            </p>
              <p>
              <br/>
              I Specialize in using a javascript environment with react ecosystem, I create maintainable, scalable and reusable code. 
              </p> 
              <br/>
              <p>
              I'm looking to offer my communication and problem solving skills to a forward-thinking and service-focused organisation.
              </p>
              
             
           </div>
          </div>
      </div>   
        
        </div>
        
             
                 
        
      );
    }
  }

  export default AboutMe; 

