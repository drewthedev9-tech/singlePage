import React, { Component } from "react";
import {Grid, Cell} from 'react-mdl';
import Tilt from 'react-tilt';
import codeSwirl from "../images/software.JPG"
import "./main.css"

// <img
// src="https://avatarfiles.alphacoders.com/335/33557.jpg"
// alt="Avatar"
// className ="avatar-img"
// />

import Section from "../../Section";

class Main extends Component {

    render() {
      return (
        <div className="background-image"style={{ backgroundImage:`url(${codeSwirl})`}}>
          <Section id="Main"/>
                            <Grid className='landing-grid'>
                          {/* does the cell size 1..12 being biggest */}
                                <Cell col={12}>
                                   
                                    <div className='banner-text'>  
                                        <h1 className="main-title" >
                                        Javascript Developer
                                        <hr/>
                                        </h1>
                                        
                        
                                        <div className = 'social-links'> 
                                            {/* github  */}
                                           
                                              <Tilt className ='icon1'>
                                              <a href='https://github.com/drewthedev9-tech' target='hhttps://github.com/drewthedev9'>
                                              <i className="fab fa-github fa-2x" aria-hidden="true"></i>
                                              </a>
                                              </Tilt>
                                           
                                          
                                            <Tilt>
                                              {/* LinkedIn */}
                                              <a href="https://www.linkedin.com/in/andrew-ormond/">
                                              <i className="fab fa-linkedin fa-lg" aria-hidden="true"></i>
                                              </a>
                                            </Tilt>
                                         
                                            

                                           
                                        </div>

                                    </div>
                                  
                                
                                    
                                </Cell>
                          </Grid>
          
        </div>
      );
    }
  }

  export default Main; 