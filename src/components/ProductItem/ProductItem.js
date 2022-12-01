import React from 'react'
import { Col, Image, Row } from "react-bootstrap"
import './ProductItem.css'


const ProductItem = () => {
  return (
    <>
       <Row className="productItem">
            <Row>
                <Col className="productHeader">
                <h4>Product Name</h4>
                <Image src ="https://www.shutterstock.com/image-photo/fresh-tomatoes-on-white-background-top-613491476" />
                </Col>
                <Col className="deliveryDetails">
                    <p>Product Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque eveniet iste doloribus, corporis repellendus explicabo consequuntur vero quibusdam est cum iure aliquam commodi delectus itaque animi voluptatem! Eaque, quod nobis.</p>
                    <hr/>
                    <Row>
                        <p>mrp</p>
                        <p>price</p>
                    </Row>
                </Col>
                <Col className="deliveryDetails">
                    <p>
                        <p>Friday 11</p>
                        <p>sdcsdck</p>

                    </p>
                </Col>

            </Row>
        </Row>
    </>
  )
}

export default ProductItem
