import React from 'react';
import Hotel from "./images/hotel.jpeg"
import Face from "./images/face.jpg"
import Budget from "./images/budget.jpg"



// stateless functional component
const Images = (props) => {

    const images =[
        {image:{Hotel}},
        {image:{Face}},
        {image:{Budget}}

    ]
        return (
        {images}
      
           
       
    )
}

export default Images;
 


