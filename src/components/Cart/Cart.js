import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import './Cart.css'
var item = [
  {
    name: "hello",
    quantity: 1,
  },
];
const CartItem = () => {
  return (
    <div>
      <h2 className="d-flex justify-content-center">Your Cart</h2>
      <hr />
      <div className="p-4 mx-auto d-flex  ">
        <Col  className="col-xl-7 col-md-7 p-4 m-4 cartDetails" style={{backgroundColor:'#FFC747'}}  >
          <Row className="p-4  cartDetails" style={{backgroundColor:'white'}}>
            <Col >Item 1</Col>
            <Col >quantity</Col>
            <Col >c</Col>
          </Row>
          
        </Col>
        <Col className="cartDetails p-4 m-4">
        <div>
           <h5>Enter promo code</h5>
            <div className="d-flex justify-content-between w-md-50 w-xl-50 mb-2">
               <textarea></textarea>
               <Button type="submit" style={{backgroundColor:'#FFC747'}}>Submit</Button>

            </div>
            <h5>Promotions</h5>
            <p>Free shipping on orders Rs500+</p>
            <hr />
            <div>
                    <span>Subtotal</span><span>324</span>
                    <br/>
                  <span>Shipping Cost</span><span>3</span>
                  <br/>
                   <span>Discount</span><span>3</span>
                   <br/>
                   <spa>Total</spa><span>324</span>
            </div>
            <div className="d-flex">
              <Button>checkout</Button>
            </div>

        </div>
         



        </Col>
      </div>
    </div>
  );
};

export default CartItem;
