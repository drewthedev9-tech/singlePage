import React, { Component } from "react";
import {Grid, Cell} from 'react-mdl';
import Tilt from 'react-tilt';



import Section from "../Section";

class Main extends Component {

    render() {
      return (
        <div style={{ margin:'auto',background: 'url(https://images.unsplash.com/photo-1549605659-32d82da3a059?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80) center / cover'}}>
          <Section id="Main"/>
                            <Grid className='landing-grid'>
                          {/* does the cell size 1..12 being biggest */}
                                <Cell col={12}>
                                    <img
                                    src="https://avatarfiles.alphacoders.com/335/33557.jpg"
                                    alt="Avatar"
                                    className ="avatar-img"
                                    />
                                    <div className='banner-text'>  
                                        <h1 className="main-title" >
                                        Full Stack Developer
                                        </h1>
                                        <hr/>
                                        <p> 
                                        HTML/CSS | Javascript | React | NodeJS | Express |Postgresql | SQL
                                        </p>
                                        
                                        <div className = 'social-links'> 
                                            {/* github  */}
                                           
                                              <Tilt className ='icon1'>
                                              <a href='https://github.com/drewthedev9' target='hhttps://github.com/drewthedev9'>
                                              <i className="fab fa-github fa-2x" aria-hidden="true"></i>
                                              </a>
                                              </Tilt>
                                           
                                          
                                            <Tilt>
                                              {/* LinkedIn */}
                                              <a href='https://www.linkedin.com/in/andrew-ormond-310067126/' rel="noopener noreferer" target="https://www.linkedin.com/in/andrew-ormond-310067126/">
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