import React from 'react';
// import Modal from "react-bootstrap/Modal";
//  import "bootstrap/dist/css/bootstrap.min.css";
// import ModalBody from "react-bootstrap/ModalBody";
// import ModalHeader from "react-bootstrap/ModalHeader";
// import ModalFooter from "react-bootstrap/ModalFooter";
// import ModalTitle from "react-bootstrap/ModalTitle";
import "./modals.css"


// stateless functional component
const modal = (props) => {
    return (
        <div>
       
            <div className="modal-wrapper"
            style={{
                transform: props.show ? 'translateY(-65vh)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            <div className="modal-header">
                <h3>{props.name}</h3>
                <span className="close-modal-btn" onClick={props.close}>×</span>
            </div>
            <div className="modal-body">
                <p>
                    {props.backInfo}
                </p>
            </div>
            <div className="modal-footer">
                <button className="btn-cancel" onClick={props.close}>CLOSE</button>
                <button className="btn-continue">CONTINUE</button>
            </div>
        </div>
    
           
        </div>
    )
}

export default modal;
 


