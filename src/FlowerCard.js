import React, { Component, useState } from 'react';


const FlowerCard = (props)=> {
        return(
            <div className = "flowers">
               
                <div>
                 <h2>{props.name}</h2>
                    <img className = "flowers__image" src = {props.flowerImage} alt = "flower" height = "200" width = "200"/>
                     <p>{props.para}</p>      
                     <button onClick = {props.onClick()}>Read more</button> 
                                 
                </div>
            </div>
        )

};
export default FlowerCard;