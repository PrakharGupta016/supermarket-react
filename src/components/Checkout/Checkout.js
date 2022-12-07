import React from 'react'
import { Button, Col } from 'react-bootstrap'

const Checkout = () => {
  return (
    <div>
      
        <div className='d-flex'>
          
            <div className = "w-50 p-4 m-4 me-5">
             
            <h2>Shipping Address</h2>
                      <div className='d-flex justify-content-between mb-4'>
                          <p className='me-4'>Addresckjsvdcnsvd</p>
                          <Button>edit</Button>

                      </div>
                      <div className='d-flex  justify-content-between'>
                          <p className='me-4'>Addresckjsvdcnsvdedde</p>
                          <Button>edit</Button>
                      </div>
                
            </div>
            <div className='w-25 p-4 m-4 ms-5 '>
              <h2 className="d-flex justify-content-center">Wallet</h2>
              <span className='ms-5 me-5'>Wallet Balance</span>
              <span className='ms-5'>$400</span>
              <textarea className='ms-5 me-5'></textarea>
          
              <Button>Add Money</Button>
            </div>
            
        </div>
        <hr />
        <div className='d-flex mt-5 w-75'  >
         
          <div className='d-flex m-4 me-5 p-3'>
            <h2>Payment Method</h2>
              <div>
                
              </div>
          </div>
   
        </div>
    </div>
  )
}

export default Checkout
