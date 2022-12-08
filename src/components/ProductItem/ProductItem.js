import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button, Col, Image, Row } from "react-bootstrap"
import { Link, useParams } from 'react-router-dom'
import './ProductItem.css'


const ProductItem = ({id}) => {
    const[product,setProduct] = useState([]);
  useEffect(()=>{
      fetch("http://localhost:8080/api/product/",{
        method:'GET',
      }).then((res)=>res.json()).then(data=>setProduct(data))
        // const catId 
      },[],[product])
  return (
    <>
       <div className="productItem " >
            <div style={{marginTop:'50px'}} className = 'd-flex'>
                <div className="productHeader" md = {2}>
                <h4 style={{marginLeft:'66px'}}>Boat</h4>
                <Image src={require('../../images/tomato.png')} className='m-5'/>
                </div>
                <dvi className="proDetails" md={7}>
                    <p>sadsadsadas.</p>
                    <hr/>
                    <div>
                        <span>price</span>
                        <p>34</p>
                      
                    </div>
                </dvi>
                <div className="deliveryDetails " md={2}>
                    <h5 className='d-flex justify-content-center'>Delivery details</h5>
                    <p>price 34</p>
                    <div className='d-flex flex-column align-items-center '>
                    <p>free delivery </p>
                    <p>friday</p>
                    <p>11 November</p>

                    </div>
                    <div className='d-flex flex-column align-items-center' style={{marginTop:'41vh'}}>
                    <Button size='sm' className='mb-3 w-100'  >Buy Now</Button>

                    <Link to='/cart'><Button size='sm' className='mb-3 w-100'>Add to Cart</Button></Link>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default ProductItem
