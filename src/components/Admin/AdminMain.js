import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AdminMain.css'
const AdminMain = () => {
  return (
    <div>
      <div className=" headerMain d-flex justify-content-center flex-column align-items-center ">
        <h1>Welcome Back Home</h1>
        <p>Manage your data here</p>

      </div>
      <div className=' mt-4 d-flex '>
        <div className=' bottomContainer w-50 d-flex flex-column justify-content-center align-items-center'>
          <h3>CATEGORIES</h3>
          <p>Manage all the categories here</p>
          <Link to='/admin-product'><Button >MANAGE</Button></Link>
        </div>
        <div className=' bottomContainer w-50 d-flex flex-column justify-content-center align-items-center'>
          <h3>PRODUCTS</h3>
          <p>Manage all the products here</p>
          <Button>MANAGE</Button>
        </div>
      </div>
    </div>
  )
}

export default AdminMain;
