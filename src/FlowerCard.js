import React, { Component } from 'react';
import flower1 from './flower1.jpg';
import './flowerCard.css';

const FlowerCard = (props)=> {
      
        return(
            <div className = "flowers">
               
                <div>
                 <h2>{props.name}</h2>
                    <img className = "flowers__image" src = {flower1} alt = "flower" height = "200" width = "200"/>
                     <p>{props.para}</p>
                    <button>Read more</button>                
            </div>
            </div>
        )

};
export default FlowerCard;