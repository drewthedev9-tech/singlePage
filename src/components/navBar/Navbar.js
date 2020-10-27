import React, { Component } from "react";
import logo from "../images/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import Tilt from 'react-tilt';
import "./navBar.css"


export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };


// open nav function for burger button.
openNav =()=>{
  // document.getElementById('mySidebar').style.width = '250px';
  // document.getElementById('main').style.marginLeft ="250px";
  const element = document.getElementById('mySidebar');
  if ( element.style.width ==='250x'){
    element.style.width = '0px';
  } 
  else {
    element.style.width = '250px';
  }

  };

  // close nav bar function.
  closeNav=()=>{
    document.getElementById('mySidebar').style.width = '0';
    };

  render() {
    return (
      <nav className="nav" id="navbar">
        
        <div className="nav-content">
        <Tilt className="Tilt br2 shadow-2" options={{ max : 80 }} style={{ height: 50, width: 100 }} >
          <img
          // img scroll to top.
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
        </Tilt>
          
          <ul className="nav-items">
            <li className="nav-item">
              <Tilt>
                  <Link
                    activeClass="active"
                    // linked to section "id = section1" in app.js
                    to="Aboutme"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    About me
                  </Link>
              </Tilt>
            </li>
            
              <li className="nav-item">
                <Tilt>
                  <Link
                      activeClass="active"
                      // linked to section "id = section1" in app.js
                      to="Projects"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                    Projects
                  </Link>
                </Tilt>
             
              </li>
              

          </ul>
          </div>
        
          <div className ='burger-open' onClick={this.openNav}>
              <i className="fas fa-bars hamburger"></i>
          </div>
        <div id='mySidebar' className='sideBar'>
            {/* closenav and openNav are just references to the fucntcions
            without the () at the end of teh functions*/ }
        <div className ='burger-close' onClick={this.closeNav}>
                    <i className="fas fa-bars hamburger"></i>
                </div>
            <ul className="nav-items">
                
              <li className="nav-item">
                <Tilt>
                    <Link
                    
                      // linked to section "id = section1" in app.js
                      to="Aboutme"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      About me
                    </Link>
                </Tilt>
              </li>
            
                <li className="nav-item">
                  <Tilt>
                    <Link
                        
                        // linked to section "id = section1" in app.js
                        to="Projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                      Projects
                    </Link>
                  </Tilt>
              
                </li>
            </ul>
        </div>
        
      
        
      </nav>
    );
  }
}
