import React from 'react'
import { Button, Col, Image, Row } from "react-bootstrap"
import './ProductItem.css'


const ProductItem = () => {
  return (
    <>
       <Row className="productItem ">
            <Row>
                <Col className="productHeader" md = {2}>
                <h4>Product Name</h4>
                <Image src={require('../../images/tomato.png')} />
                </Col>
                <Col className="deliveryDetails">
                    <p>Product Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque eveniet iste doloribus, corporis repellendus explicabo consequuntur vero quibusdam est cum iure aliquam commodi delectus itaque animi voluptatem! Eaque, quod nobis.</p>
                    <hr/>
                    <div>
                        <p>mrp</p>
                        <p>price</p>
                    </div>
                </Col>
                <Col className="deliveryDetails " md={3}>
                    <h5 className='d-flex justify-content-center'>Delivery details</h5>
                    <p>price</p>
                    <p>free delivery by friday 11 pm november</p>
                    <Button size='sm' className='mb-3' >Buy Now</Button>
                    <br />
                    <Button size='sm'>Add to Cart</Button>
                </Col>

            </Row>
        </Row>
    </>
  )
}

export default ProductItem
