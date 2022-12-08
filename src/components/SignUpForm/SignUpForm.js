
import React, { useState,useContext} from 'react'
import { Button, FormCheck,Form } from 'react-bootstrap'
import { json, Link } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
const defaultFormFields = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
};
const url = 'http://localhost:8080/api/v1/auth/register';

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
  const { first_name, last_name, email, password } = formFields;
  // const {setCurrentUser} = useContext(UserContext);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = (event) => {
 
    event.preventDefault();
    console.log(formFields);
    // try {
    //   // await signInAuthUserWithEmailAndPassword(email, password);
    //   // setCurrentUser(user);
    //   resetFormFields();
    // } catch (error) {
    //   console.log('user sign in failed', error);
    // }
    fetch(url,{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(formFields)
    }).then((res)=>json(res)).then(res=>console.log(res));
  };

const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className='mx-auto w-25 mt-5'>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formPlaintext">
          <Form.Label className="w-100 mx-auto">First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First name"
            name="first_name"
            onChange={handleChange}
            value={first_name}
          />
          <Form.Text className="text-muted">
        
          </Form.Text>
        </Form.Group>

        
        <Form.Group className="mb-3" controlId="formPlaintext">
          <Form.Label className="w-100 mx-auto">Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            name="last_name"
            onChange={handleChange}
            value={last_name}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formPlainEmail">
          <Form.Label className="w-100 mx-auto">Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Email"
            name="email"
            onChange={handleChange}
            value={email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          {/* <Form.Check type="checkbox" label="Check me out" /> */}
        </Form.Group>
        <Button variant="primary" type="submit" className='d-flex'>
          Submit
        </Button>
        <Link to='/login' >login</Link>
      </Form>
    </div>
  );
};

export default SignUpForm;
