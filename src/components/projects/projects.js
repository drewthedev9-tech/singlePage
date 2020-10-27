import React, {Component} from 'react';
import "./projects.css";
import Particles from 'react-particles-js';
import Section from "../../Section";
import Card from "../card/card";

const particlesOptions = {
  particles: {
    number: {
      value:80,
      density: {
        enable: true,
        value_area:800
      }
    }
  }
}

class Projects extends Component {

  state = {
       
        
        cardInfo:  [
           { id: 1, 
           name: "Vidly",
           image : require( '../images/video.png'), 
           modalDesc: "",
           backCardSub: "Full stack movie rental application",
           backCardDesc :"React & boostrap front-end / Node.js,express,MongoDB", 
           git:  "https://github.com/drewthedev9-tech/vidly/",
           link:"https://radiant-island-46689.herokuapp.com",
         },
         

           { id: 2, 
           name: "Face-Recognition",
           image:  require( '../images/face.jpg'),
           modalDesc: " A full stack",
           backCardSub: " FULL STACK Application ",
           backCardDesc :" Full stack application from back to front using React, Express, API, Database", 
           git:  "https://github.com/drewthedev9-tech/face-app",
           link:"https://front-end-smartbrain.herokuapp.com",
         },

           { id: 3, 
           name: "Budegting App",
           image:  require( '../images/budget.jpg'), 
           modalDesc:  "a javascript budegeting App",
           backCardSub: " Javascript budgeting web app ",
           backCardDesc :" web app using DOm manipulation with Vanilla Js", 
             git: "https://github.com/drewthedev9-tech/budegtapp",
             link: "https://drewthedev9-tech.github.io/budegtapp/",
         }

           
         ],  
}





render(){
     return(
            
    <div>
    <Particles className='particles'
    params={particlesOptions}/>   
            <Section id="Projects"/>
                <header className="header">
                    <h1>My Projects</h1>
                    <h2> HTML5/CSS3 | React | Javascritpt | Nodejs | PostgreSQL </h2>
                </header>

       <div className="grid">
       {this.state.cardInfo.map((data, id) => (
        <div key ={id}>
            <Card
            liveDemo={data.link}
            gitHub={data.git}
            image ={data.image}
            backTitle = {data.backCardSub}
            backDesc ={data.backCardDesc}
            title = {data.name}
            />
       </div>         
      ))}
       </div>
    </div>
    )
    }
    

}

export default Projects;



               
