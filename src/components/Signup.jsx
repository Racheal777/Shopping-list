import React, {useState} from "react";
import { Button, Form, FormGroup, Input, Label, NavLink } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import <Link></Link> from "react-router-dom"

const Signup = () => {
  const [isconfirm, setIsconfirm] = useState(false)
  
  const [ firstName, setfirstName ] = useState('')
  const [ lastName,  setlastName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ userName, setUserName ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmPassword, setconfirmPassword] = useState('')
  const [passworderror, setPassworderror ] = useState('')
  const [emailerror, setEmailerror] = useState('')
  const [usernameerror, setUsernameerror] = useState('')

  //for navigation
const navigate = useNavigate()
  //grabbing users data
  const saveUser = async (e) => {
    try {
    e.preventDefault()
    
    if(password === confirmPassword){
        const signup = await axios.post('http://localhost:7070/user/signup', {
          firstName,
          lastName,
          email,
          userName,
          password
        }, {withCredentials: true},)
        console.log(signup)
  
        if(signup.data){
         navigate('/') 
        }
    }else{
setPassworderror('Password do not match')
    }
    
    } catch (error) {
      if(error.message.includes('400')){
        setEmailerror('Email not available')
      }else if(error.message.includes('409')){
        setUsernameerror('username already taken')
      }
      console.log(error)
      
    }

    console.log()
  }

  
  
  return (
    <div className="form-page">
      <div className="login-form">
        <div className="form-title">
          <h2>SignUp</h2>
          <p>
            Already have an account? <NavLink href="/">Login</NavLink>
          </p>
        </div>

        <Form className="form" onSubmit={saveUser}>
          <FormGroup>
            <Label htmlFor="user_name">Username</Label>
            <Input
              type="text"
              name="username"
              id="exampleEmail"
              value={userName}
              placeholder="Racheal23"
              onChange={(e) => setUserName(e.target.value)}
              
            />
            <span>{usernameerror} </span>
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
            <span>{emailerror} </span>
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
              <span>{passworderror} </span>
            </FormGroup>
          </div>

          
          <Button onClick={saveUser} disabled={!email && !firstName && !lastName && !userName && !password && !confirmPassword}>
            Register <i id="icon" className="fa-solid fa-arrow-right"></i>
            
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
