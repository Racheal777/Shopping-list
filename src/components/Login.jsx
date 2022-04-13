import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, NavLink } from "reactstrap";
// import <Link></Link> from "react-router-dom"

const Login = () => {
  const [user, setUser] = useState({
    
    email: "",
    password: "" 
  })

  //grabbing users data
  const updateUser = (e) => {
    const value = e.target.value
    setUser({
      ...user, [e.target.name]: value
    })

    console.log(user)
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
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              value={user.email}
              placeholder="example@example.com"
              onChange={updateUser}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              value={user.password}
              placeholder="********"
              onChange={updateUser}
            />
          </FormGroup>
          <Button onClick={updateUser}>
            Login <i id="icon" class="fa-solid fa-arrow-right"></i>
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
