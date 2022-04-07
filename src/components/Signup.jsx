import React from "react";
import { Button, Form, FormGroup, Input, Label, NavLink } from "reactstrap";
// import <Link></Link> from "react-router-dom"

const Signup = () => {
  return (
    <div className="form-page">
      <div className="login-form">
        <div className="form-title">
          <h2>SignUp</h2>
          <p>
            Already have an account? <NavLink to="/signup">Login</NavLink>
          </p>
        </div>

        <Form className="form">
          <FormGroup>
            <Label for="exampleEmail">Username</Label>
            <Input
              type="text"
              name="username"
              id="exampleEmail"
              placeholder="Racheal23"
            />
          </FormGroup>

          <div className="form-name">
            <FormGroup>
              <Label for="exampleEmail">Firstname</Label>
              <Input
                type="text"
                name="firstname"
                id="exampleEmail"
                placeholder="Racheal"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Lastname</Label>
              <Input
                type="text"
                name="lastname"
                id="exampleEmail"
                placeholder="Kuranchie"
              />
            </FormGroup>
          </div>

          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="example@example.com"
            />
          </FormGroup>

          <div className="form-name">
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
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
          </div>

          <Button>
            Register <i id="icon" class="fa-solid fa-arrow-right"></i>
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
