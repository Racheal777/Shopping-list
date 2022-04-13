import React, {useState} from "react";
import { Button, Form, FormGroup, Input, Label, NavLink } from "reactstrap";
// import <Link></Link> from "react-router-dom"

const Signup = () => {
  const [isconfirm, setIsconfirm] = useState(false)
  const [user, setUser] = useState({
    firstName : "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "", 
  })

  //grabbing users data
  const updateUser = (e) => {
    const value = e.target.value
    setUser({
      ...user, [e.target.name]: value
    })

    console.log(user)
  }

  //confirming password
  const confirm = () => {
    if(user.password === user.confirmPassword){
      setIsconfirm(true)
    }else{
      setIsconfirm(false)
    }
  }
  console.log(isconfirm)
  
  return (
    <div className="form-page">
      <div className="login-form">
        <div className="form-title">
          <h2>SignUp</h2>
          <p>
            Already have an account? <NavLink href="/login">Login</NavLink>
          </p>
        </div>

        <Form className="form" onSubmit={updateUser}>
          <FormGroup>
            <Label for="exampleEmail">Username</Label>
            <Input
              type="text"
              name="username"
              id="exampleEmail"
              value={user.username}
              placeholder="Racheal23"
              onChange={updateUser}
            />
          </FormGroup>

          <div className="form-name">
            <FormGroup>
              <Label for="exampleEmail">Firstname</Label>
              <Input
                type="text"
                name="firstName"
                id="exampleEmail"
                value={user.firstName}
                placeholder="Racheal"
                onChange={updateUser}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Lastname</Label>
              <Input
                type="text"
                name="lastName"
                id="exampleEmail"
                value={user.lastName}
                placeholder="Kuranchie"
                onChange={updateUser}
              />
            </FormGroup>
          </div>

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

          <div className="form-name">
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

        
            <FormGroup>
              <Label for="examplePassword">Confirm Password</Label>
              <Input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={user.confirmPassword}
                placeholder="********"
                onChange={updateUser}
              />
            </FormGroup>
          </div>

          
          <Button onClick={updateUser}>
            Register <i id="icon" class="fa-solid fa-arrow-right"></i>
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
