import React from 'react'
import { useEffect,useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// const product = [
//   {
//     name:'dcscd',
//     category:'csd',
//   },
//   {
//     name:'dcscd',
//     category:'csd',
//   },
//   {
//     name:'dcscd',
//     category:'csd',
//   }
// ];

const AdminProductList = () => {
  const removeProduct = (obj,product) => {
    const id = obj.id
    
      fetch("http://localhost:8080/api/product/delete/1",{
        method:'DELETE',

      }).then((res)=>res.json()).then(()=>{
        
        setProduct(product.filter((c) => c.id !== id))});
       
      

  }
  const[product,setProduct] = useState([]);
  useEffect(()=>{
      fetch("http://localhost:8080/api/product/",{
        method:'GET',
      }).then((res)=>res.json()).then(data=>setProduct(data))
        // const catId 
      },[],[product])

  return (
    <div>
      <div className='mt-5'>
        <div className='d-flex justify-content-around'>
          <h2>PRODUCT NAME</h2>
          <h2>CATEGORY</h2>
          <h2>DELETE</h2>
          <h2>UPDATE</h2>

        </div>
        {product.map(p=>{
          return(<div className='d-flex mt-5 mb-5 justify-content-around'>
              <div>
                {p.name}
              </div>
              <div>
                {p.categoryId}
              </div>
              <div className='w-25 d-flex justify-content-around'>
              <Button onClick={()=>removeProduct(p,product)}>Delete</Button>
              <Link to='/admin-product-form'><Button>Add</Button></Link>

              </div>
          </div>)
        })}

      </div>
    </div>
  )
}

export default AdminProductList
