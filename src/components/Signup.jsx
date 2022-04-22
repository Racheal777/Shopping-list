import React, {useState} from "react";
import { Button, Form, FormGroup, Input, Label, NavLink } from "reactstrap";
// import <Link></Link> from "react-router-dom"

const Signup = () => {
  const [isconfirm, setIsconfirm] = useState(false)
  
  const [ firstName, setfirstName ] = useState('')
  const [ lastName,  setlastName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmPassword, setconfirmPassword] = useState('')


  //grabbing users data
  const updateUser = (e) => {
    e.preventDefault()
    

    console.log()
  }

  //confirming password
  // const confirm = () => {
  //   if(user.password === user.confirmPassword){
  //     setIsconfirm(true)
  //   }else{
  //     setIsconfirm(false)
  //   }
  // }
  // console.log(isconfirm)
  
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
              id="exampleEmail"
              value={username}
              placeholder="Racheal23"
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormGroup>

          <div className="form-name">
            <FormGroup>
              <Label htmlFor="first_name">Firstname</Label>
              <Input
                type="text"
                name="firstName"
                id="first_name"
                value={firstName}
                placeholder="Racheal"
                onChange={(e) => setfirstName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="last_name">Lastname</Label>
              <Input
                type="text"
                name="lastName"
                id="last_name"
                value={lastName}
                placeholder="Kuranchie"
                onChange={(e) => setlastName(e.target.value)}
              />
            </FormGroup>
          </div>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="example@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>

          <div className="form-name">
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

        
            <FormGroup>
              <Label htmlFor="confirm_pass">Confirm Password</Label>
              <Input
                type="password"
                name="confirmPassword"
                id="confirm_pass"
                value={confirmPassword}
                placeholder="********"
                onChange={(e) => setconfirmPassword(e.target.value)}
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
