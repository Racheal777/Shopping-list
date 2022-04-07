import React from "react";
import { Button, Form, FormGroup, Input, Label, NavLink } from "reactstrap";
// import <Link></Link> from "react-router-dom"

const Login = () => {
  return (
    <div className="form-page">
      <div className="login-form">
        <div className="form-title">
          <h2>Login</h2>
          <p>
            Don't have an account? <NavLink to="/signup">Signup</NavLink>
          </p>
        </div>

        <Form className="form">
          <FormGroup>
            <Label for="exampleEmail">Username</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="example@example.com"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
            />
          </FormGroup>
          <Button>
            Login <i id="icon" class="fa-solid fa-arrow-right"></i>
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
