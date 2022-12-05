
import React, { useState,useContext} from 'react'
import { Button, FormCheck,Form } from 'react-bootstrap'
import { UserContext } from '../../contexts/userContext';
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};


const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const {setCurrentUser} = useContext(UserContext);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // await signInAuthUserWithEmailAndPassword(email, password);
      // setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };

const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className='mx-auto w-25 mt-5'>
      <Form>
      <Form.Group className="mb-3" controlId="formPlaintext">
          <Form.Label className="w-100 mx-auto">User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={displayName}
          />
          <Form.Text className="text-muted">
        
          </Form.Text>
        </Form.Group>

        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="w-100 mx-auto">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
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
            value={password}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          {/* <Form.Check type="checkbox" label="Check me out" /> */}
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUpForm;
