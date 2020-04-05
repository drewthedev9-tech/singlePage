import React, {Component} from 'react';
import Section from "../Section";




class Skills extends Component {
    render(){
        return(
            <div style={{width: '90%', margin: 'auto'}}>
            <Section id="Skills"/>
                    
                <div className="skills-wrapper">
                
                   
                    <div className="front-end">
                        <i className='fas fa-file-code fa-2x'></i>
                        <h1>Front-end</h1>
                                 <div className ='row1'>
                                    <h3>Semantic HTML5<i className="fab fa-html5"></i></h3>
                                    <h3>Responsive CSS3<i className="fab fa-css3-alt"></i></h3>
                                    <h3>Javascript<i className="fab fa-js"></i></h3>
                                    <div>Sass<i className="fab fa-sass"></i></div>
                                    <div>Bootstrap<i className="fas fa-code"></i></div>
                                    <div>Wordpress<i className="fab fa-wordpress" aria-hidden="true"></i></div>
                                </div>
                                <div className='row2'>
                                <div className="row9">React<i className="fab fa-react"></i></div>
                                <div className="row7">Redux<i className="fas fa-sitemap"></i></div>
                                
                               </div>
                               
                        </div>
                    <div className="back-end">
                        <i className='fas fa-server fa-2x'></i> 
                        <h1>Back-end</h1>
                       <div className = 'back-end-skills'>
                            <div className="">nodeJs<i className="fab fa-node-js icon-large"></i></div>
                            <div className="">Express<i className="fab fa-node-js"></i></div>
                            <div className="">PostgreSQL<i className="fas fa-database"></i></div>
                       </div>
                        
                    </div>
                   
                </div> 

                <h3 className="dev-title">Dev Environment</h3>

               <div className="wrapper-3">
                    <div className="terminal">
                        <h3>Terminal</h3>
                    </div>
                    <div className="git-hub">
                        <h3 className="row4">Github<i className="fab fa-github"></i></h3>
                    </div>
                    <div className="vs-code">
                        <h3>VS code</h3>
                    </div>
                    <div className="vs-code">
                        <h3>NPM + NPM scripts</h3>
                    </div>
               </div>
               
                <h3 className="other-skills-title">Other Skills</h3>

                <div className="wrapper-4">
                    <div className="terminal">
                        <h3>API's</h3>
                    </div>
                    <div className="git-hub">
                        <h3>Heroku</h3>
                    </div>
                  
               </div>
        </div>
        )
    }
    

}

export default Skills;