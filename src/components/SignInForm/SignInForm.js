import React, { useState,useContext} from 'react'
import { Button, FormCheck,Form } from 'react-bootstrap'
import { json, Link } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
const defaultFormFields = {

  username: '',
  password:''
 
};
const url = 'http://localhost:8080/api/v1/auth/login';
const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, password } = formFields;
  const [ok,setok] = useState(0);
  // const {setCurrentUser} = useContext(UserContext);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit =  (event) => {

    event.preventDefault();
    console.log(formFields);
    fetch(url,{
      method:'POST',
      headers:{  'Accept': 'application/json',
      'Content-Type': 'application/json',},
      body:JSON.stringify(formFields)
    }).then(response => {if(response.ok){
      response.json().then(responseJson =>{
        localStorage.setItem('token',(responseJson.token))
        setok(1)
      });
    }
    else{
      alert('incoorest cred')
    }
  })

    

    
  };

const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
    
  return (
    <div>
      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="w-100 mx-auto">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  name='username'
          value={username} onChange={handleChange}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"  name='password' value={password} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          {/* <Form.Check type="checkbox" label="Check me out" /> */}
        </Form.Group>

       {ok?<Link to='/'> <Button variant="primary" type="submit">
          Submit
        </Button></Link>:<Button variant="primary" type="submit">
          Submit
        </Button>};
      </Form>
    </div>
  )
}

export default SignInForm;
