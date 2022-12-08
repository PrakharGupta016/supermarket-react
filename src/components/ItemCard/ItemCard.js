import React from 'react'
import { useEffect,useState } from 'react';

 import './itemCard.css';
//  var product = [{
//   name : 'tomato',
//   price : 133,

//  },
//  {
//   name : 'tomato',
//   price : 133,

//  },
//  {
//   name : 'tomato',
//   price : 133,

//  },
//  {
//   name : 'tomato',
//   price : 133,

//  },
//  {
//   name : 'tomato',
//   price : 133,

//  },
//  {
//   name : 'tomato',
//   price : 133,

//  },]

const ItemCard = () => {
  const[product,setProduct] = useState([]);
  // const val = localStorage.getItem("token");
  // const token = JSON.parse(val);
  useEffect(()=>{
      fetch('http://localhost:8080/api/product/',{
        method:'GET',
        // headers:{"Authorization" : `Bearer ${token}`}
      }).then(res=>(res.json()).then(res=>setProduct(res)))
  },[])

  return (
    

      <>

         <div className="d-flex justify-content-around ">  
        {product.map(product=>{
       
          return(<div style={{width:'11vw',height:'46vh',backgroundColor:'yellow',marginRight:'15px',borderRadius:'10px'}}>
       
             <div className='mt-4 pe-4 ps-4 d-flex justify-content-center'><img style={{width: '16vw', height: '150px'}} src={require('../../images/tomato.png')}  /></div>
              <div className="w-25">{product.name}</div>
              <div className="w-25">{product.price}</div>
              <p>54% OFF</p>
         </div>)
      
        })}
           </div>
      
      
      
      
      
      
      </>
    
    
  )
}

export default ItemCard
