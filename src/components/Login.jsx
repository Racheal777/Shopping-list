import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, NavLink } from "reactstrap";
// import <Link></Link> from "react-router-dom"

const Login = () => {
  
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  

  //grabbing users data
  const updateUser = (e) => {
    e.preventDefault()
  

    console.log()
  }
  return (
    <div className="form-page">
      <div className="login-form">
        <div className="form-title">
          <h2>Login</h2>
          <p>
            Don't have an account? <NavLink href="/">Signup</NavLink>
          </p>
        </div>

        <Form className="form" onSubmit={updateUser}>
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
          <Button onClick={updateUser}>
            Login <i id="icon" className="fa-solid fa-arrow-right"></i>
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
