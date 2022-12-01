import React from 'react'
import { Card } from 'react-bootstrap'
import { Col, Image, Row } from "react-bootstrap"
 import './itemCard.css';
 var product = [{
  name : 'tomato',
  price : 133,

 },
 {
  name : 'tomato',
  price : 133,

 },
 {
  name : 'tomato',
  price : 133,

 },
 {
  name : 'tomato',
  price : 133,

 },
 {
  name : 'tomato',
  price : 133,

 },
 {
  name : 'tomato',
  price : 133,

 },]
const ItemCard = () => {
  return (

      <>
         <div className="d-flex justify-content-center ">  
        {product.map(product=>{
       
          return(<div >
       
             <img style={{width: '15%', height: '35%'}} src={require('../../images/tomato.png')}  />
              <div className="w-25">{product.name}</div>
              <div className="w-25">{product.price}</div>
         </div>)
      
        })}
           </div>
      
      
      
      
      
      
      </>
    
    
  )
}

export default ItemCard
