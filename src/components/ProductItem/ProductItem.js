import React from 'react'
import { Button, Col, Image, Row } from "react-bootstrap"
import './ProductItem.css'


const ProductItem = () => {
  return (
    <>
       <div className="productItem " >
            <div style={{marginTop:'50px'}} className = 'd-flex'>
                <div className="productHeader" md = {2}>
                <h4 style={{marginLeft:'66px'}}>Product Name</h4>
                <Image src={require('../../images/tomato.png')} className='m-5'/>
                </div>
                <dvi className="proDetails" md={7}>
                    <p>Product Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque eveniet iste doloribus, corporis repellendus explicabo consequuntur vero quibusdam est cum iure aliquam commodi delectus itaque animi voluptatem! Eaque, quod nobis.</p>
                    <hr/>
                    <div>
                        <p>mrp</p>
                        <p>price</p>
                    </div>
                </dvi>
                <div className="deliveryDetails " md={2}>
                    <h5 className='d-flex justify-content-center'>Delivery details</h5>
                    <p>price</p>
                    <div className='d-flex flex-column align-items-center '>
                    <p>free delivery </p>
                    <p>friday</p>
                    <p>11 November</p>

                    </div>
                    <div className='d-flex flex-column align-items-center' style={{marginTop:'41vh'}}>
                    <Button size='sm' className='mb-3 w-100'  >Buy Now</Button>

                    <Button size='sm' className='mb-3 w-100'>Add to Cart</Button>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default ProductItem
