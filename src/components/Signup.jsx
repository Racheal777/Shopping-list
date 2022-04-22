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
            <Label htmlFor="user_name">Username</Label>
            <Input
              type="text"
              name="username"
              id="user_name"
              value={user.username}
              placeholder="Racheal23"
              onChange={updateUser}
            />
          </FormGroup>

          <div className="form-name">
            <FormGroup>
              <Label htmlFor="first_name">Firstname</Label>
              <Input
                type="text"
                name="firstName"
                id="first_name"
                value={user.firstName}
                placeholder="Racheal"
                onChange={updateUser}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="last_name">Lastname</Label>
              <Input
                type="text"
                name="lastName"
                id="last_name"
                value={user.lastName}
                placeholder="Kuranchie"
                onChange={updateUser}
              />
            </FormGroup>
          </div>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={user.email}
              placeholder="example@example.com"
              onChange={updateUser}
            />
          </FormGroup>

          <div className="form-name">
            <FormGroup>
              <Label htmlFor="examplePassword">Password</Label>
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
              <Label htmlFor="confirm_pass">Confirm Password</Label>
              <Input
                type="password"
                name="confirmPassword"
                id="confirm_pass"
                value={user.confirmPassword}
                placeholder="********"
                onChange={updateUser}
              />
            </FormGroup>
          </div>

          
          <Button onClick={updateUser}>
            Register <i id="icon" className="fa-solid fa-arrow-right"></i>
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
