import React, {useState} from 'react';
import FlowerCard from './FlowerCard';
import flower1 from './flower1.jpg';
import rose from './rose.jpg';
import lily from './lily.jpg';
import daisy from './daisy.jpg';
import './flowerCard.css';

    let flowerDetails = [
     {id: 4, name: 'Sunflower', para: 'Sunflower is a nice flower', flowerImage: flower1},
     {id: 7, name: 'Rose', para: 'Rose is a nice flower', flowerImage: rose},
     {id: 11, name: 'lily', para: 'Jasmine is a nice flower', flowerImage: lily},
     {id: 12, name: 'Daisy', para: 'Daisy is a nice flower', flowerImage: daisy},
     
    ];
    
    

    


//   const changePara = ()=>{
//       return <p>
//           Here is the details
//       </p>

//   }

const FlowerBoard = ()=> {
    const [details, setDetails] = useState('');
    function readMore(){
        setDetails('Here you go');
        

    };  
                 return(

             <div>
                 <h2>FlowerBoard</h2>
                
                {flowerDetails.map((p)=>{
                    return(<FlowerCard key = {p.id} id = {p.id} name = {p.name} para = {p.para} flowerImage = {p.flowerImage} onClick = {readMore}/>)
                    
                })}
                </div>
         )

    };


export default FlowerBoard;