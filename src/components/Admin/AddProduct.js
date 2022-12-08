import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { Button, FormCheck, Form } from "react-bootstrap";
const defaultFormFields = {
  name: '',
  costPrice: '',
  salePrice: '',
  description: '',
  categoryId: '',
};
const url = "http://localhost:8080/api/product/";

const AddProduct = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, costPrice, salePrice, description, categoryId } = formFields;
  const [image,setImage] = useState(null);
  const handleImage = (event)=>{
       console.log(event.target.files[0])
      //  setImage(event.target)
  }

  // const {setCurrentUser} = useContext(UserContext);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formFields);
    console.log(image);
    // const val = localStorage.getItem('token');
    // const token = JSON.parse(val);
    fetch(url,{
      method: "POST",

      headers:{
        Accept: "application/json",
        "Content-Type": "application/json",

    
        
        // "Authorization":`Bearer ${token}`
            
      },
      body: JSON.stringify(formFields),

    }).then(res=>res.json())

  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

    

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasictext">
          <Form.Label className="w-100 mx-auto">Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasictext">
          <Form.Label>description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Password"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasictext">
          <Form.Label className="w-100 mx-auto">sales Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter name"
            name="salePrice"
            value={salePrice}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasictext">
          <Form.Label className="w-100 mx-auto">cost Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter name"
            name="costPrice"
            value={costPrice}
            onChange={handleChange}
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasictext">
          <Form.Label className="w-100 mx-auto">category Id</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter name"
            name="categoryId"
            value={categoryId}
            onChange={handleChange}
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formFile">
          <Form.Label className="w-100 mx-auto">Upload Image</Form.Label>
          <Form.Control
            type="file"
            placeholder="Enter name"
            name="image"
  
            onChange={handleImage}
          />
        </Form.Group> */}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
