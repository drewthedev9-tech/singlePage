import React, { Component } from 'react';
import "./card.css";

import Modal from "../modal/modal";






class Cardface extends Component {
    state = {
       

      
 };
    render() { 
      
  
        return ( 
          <div>
          <div className="container">
          <div className="card">
            <div className="front">
              <div className="logo">
              <img
              alt ="pic"
              src ={this.props.image}
              />
              
              </div>
            </div>
            <div className="back">
            <div className="back-box-container"></div>
              <h1 className="title-back">{this.props.title}<span>{this.props.backTitle}</span></h1>
              <div className="description-back">
                <p>{this.props.backDesc}</p>
              </div>
              <div className="button-box">
              <a href={this.props.liveDemo}>
                <button className="button-back"> Live Demo</button>
              </a>
              <a href={this.props.gitHub}>
                <button className="button-back"> Git Hub</button>
              </a>
              </div>
             
            </div>
            </div>
          </div>
        
          </div>
       );
    }
}


 
export default Cardface;


// <Modal
       
// show={this.state.showModal === data.id}
// onHide={ this.hideModal}
// name={data.name}
// close ={this.hideModal}
// backInfo = {data.modalDesc}
// />



       
        

