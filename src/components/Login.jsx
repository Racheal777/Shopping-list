import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, NavLink } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import <Link></Link> from "react-router-dom"

const Login = () => {
  
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  
   //for navigation
    const navigate = useNavigate()
//grabbing users data
const Login = async (e) => {
  e.preventDefault()
  
  try {
    const login = await axios.post('http://localhost:7070/user/login', {
      
      email,
      password

    }, {withCredentials: true})
    console.log(login)
    if(login.data){
     navigate('/list')
    //  console.log(window.localStorage.setItem('userId',login.data.id)) 
     console.log(JSON.stringify(window.localStorage.setItem('userId',login.data.id)))
     console.log(JSON.stringify(window.localStorage.setItem('firstName',login.data.firstName)))
    }
  } catch (error) {
    console.log(error)
    
  }

 
}

  return (
    <div className="form-page">
      <div className="login-form">
        <div className="form-title">
          <h2>Login</h2>
          <p>
            Don't have an account? <NavLink href="/signup">Signup</NavLink>
          </p>
        </div>

        <Form className="form" onSubmit={Login}>
          <FormGroup>
            <Label htmlFor="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              value={email}
              placeholder="example@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              value={password}
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <Button onClick={Login}>
            Login <i id="icon" className="fa-solid fa-arrow-right"></i>
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
