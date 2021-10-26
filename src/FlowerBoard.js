import React, { Component } from 'react';
import FlowerCard from './FlowerCard';

    let flowerDetails = [
     {id: 4, name: 'Sunflower', para: 'Sunflower is a nice flower', base_experience: 62},
     {id: 7, name: 'Rose', para: 'Rose is a nice flower', base_experience: 63},
     {id: 11, name: 'Jasmine', para: 'Jasmine is a nice flower', base_experience: 72},
     {id: 12, name: 'Daisy', para: 'Daisy is a nice flower', base_experience: 178},
     
    ];
  

const FlowerBoard = ()=> {        
         return(

             <div>
                 <h2>FlowerBoard</h2>
                
                {flowerDetails.map((p)=>{
                    return(<FlowerCard id = {p.id} name = {p.name} para = {p.para}/>)
                    
                })}
                </div>
         )

    };


export default FlowerBoard;