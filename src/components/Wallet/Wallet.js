import React from 'react'
import { Col } from 'react-bootstrap'
import './Wallet.css'
const Wallet = () => {
  return (
    <div>
        <div className='walletPrice mx-auto d-flex justify-content-center mt-4 flex-column align-items-center'>
            <p>Current Balance</p>

            <p>$875</p>
        </div>
        <hr/>
        <div className='d-flex w-75 mx-auto  accountContainer' >
          <Col>
            <h3>UBL Account</h3>
            <p>account number 1234-1245-</p>
          </Col>
          <Col>
              <h3>Balance</h3>
              <h3>$4000</h3>

          </Col>
          <Col>
             
             <div className='accountOptions d-flex justify-content-center mb-2'>view Transactions</div>
              <div className='accountOptions d-flex justify-content-center mb-2'>Update Account Info</div>
              <div className='accountOptions d-flex justify-content-center mb-2'>delelte account</div>


          </Col>
        </div>
        
    </div>
  )
}

export default Wallet
