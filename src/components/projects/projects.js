import React, {Component} from 'react';
import "./projects.css";
import Section from "../../Section";
import Card from "../card/card";

import Modal from "../modal/modal.js";



class Projects extends Component {


constructor() {
    super();

    this.state = {
        showModal: 0,
        
        cardInfo:  [
           { id: 1, 
           name: "Hotello",
           image : require( '../images/hotel.jpeg'), 
           modalDesc: " A siplistic single page design usig SASS",
           backCardSub: " UI made with SASS focus",
           backCardDesc :" A Full SPA design & layout with with SASS built emphasis", 
           git:  "https://github.com/drewthedev9-tech/Hotello",
           link:"https://drewthedev9-tech.github.io/Hotello/",
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
             lnk: "https://drewthedev9-tech.github.io/budegtapp/",
         }

           
         ],
     };
}


getModal = value => {
    this.setState({ showModal: value });
    console.log(this.state)
  };

  hideModal = value => {
    this.setState({ showModal: false });
  };


render(){
     return(
            
    <div>
   

        { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
        
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
        <Modal/>

    </div>
    )
    }
    

}

export default Projects;



               
