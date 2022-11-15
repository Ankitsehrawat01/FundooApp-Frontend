import React, { useState } from 'react'
import './SignUp.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { signUpApi } from '../Services/userService';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const nameRegex = /^[A-Z]{1}[a-z]{2,}$/;

function SignUp() {

  const [signupobj, setsignupobj] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })
  const [regexObj, setRegexobj] = useState({
    firstnameborder: false,
    firstnamehelper: "",
    lastnameborder: false,
    lastnamehelper: "",
    emailborder: false,
    emailhelper: "",
    passwordborder: false,
    passwordhelper: "",
    confirmpasswordborder: false,
    confirmpasswordhelper: ""
  })
  const enterFirstName = (event) => {
    console.log(event.target.value)
    setsignupobj((prevState) => ({...prevState, firstName: event.target.value}))
  }
  const enterLastName = (event) => {
    console.log(event.target.value)
    setsignupobj((prevState) => ({...prevState, lastName: event.target.value}))
  }
  const enterEmail = (event) => {
    console.log(event.target.value)
    setsignupobj((prevState) => ({ ...prevState, email: event.target.value }))
  }
  const enterPassword = (event) => {
    console.log(event.target.value)
    setsignupobj((prevState) => ({ ...prevState, password: event.target.value }))
  }
  const confirmPassword = (event) => {
    console.log(event.target.value)
    setsignupobj((prevState) => ({ ...prevState, password: event.target.value }))
  }
  const accountCreated = () => {
    console.log(signupobj)
    let checkFirstName = nameRegex.test(signupobj.firstName)
    let checkLastName = nameRegex.test(signupobj.firstName) 
    let checkemail = emailRegex.test(signupobj.email)
    let checkpassword = passwordRegex.test(signupobj.password)
    let confirmpassword = passwordRegex.test(signupobj.password)

    if (checkFirstName === true) {
      setRegexobj((prevState) => ({ ...prevState, firstnameborder: false, firstnamehelper: "" }))
    }
    else if (checkFirstName === false) {
      setRegexobj((prevState) => ({ ...prevState, firstnameborder: true, firstnamehelper: "Enter your correct Name" }))
    }

    if (checkLastName === true) {
      setRegexobj((prevState) => ({ ...prevState, lastnameborder: false, lastnamehelper: "" }))
    }
    else if (checkLastName === false) {
      setRegexobj((prevState) => ({ ...prevState, lastnameborder: true, lastnamehelper: "Enter your correct Name" }))
    }

    if (checkemail === true) {
      setRegexobj((prevState) => ({ ...prevState, emailborder: false, emailhelper: "" }))
    }
    else if (checkemail === false) {
      setRegexobj((prevState) => ({ ...prevState, emailborder: true, emailhelper: "Enter your correct Email" }))
    }

    if (checkpassword === true) {
      setRegexobj((prevState) => ({ ...prevState, passwordborder: false, passwordhelper: "" }))
    }
    else if (checkpassword === false) {
      setRegexobj((prevState) => ({ ...prevState, passwordborder: true, passwordhelper: "Enter your correct Password" }))
    }

    if (confirmpassword === true) {
      setRegexobj((prevState) => ({ ...prevState, confirmpasswordborder: false, confirmpasswordhelper: "" }))
    }
    else if (confirmpassword === false) {
      setRegexobj((prevState) => ({ ...prevState, confirmpasswordborder: true, confirmpasswordhelper: "Password didn't Match" }))
    }
    if(checkFirstName === true && checkLastName ===true && checkemail ===true && checkpassword === true )
  {
    signUpApi(signupobj)
     .then((response)=>{console.log(response)})
     .catch((error)=>{console.log(error)})
     console.log("Account Created")
  } 
  }
  
  return (
    <div>
      <form className='reg'>
        <div className='main'>
          <div className='title'> Fundoo</div>
          <div className='sub-title'> Create your Fundoo Account</div>

          <div className='fieldclass'>
            <div className='first'>
            <TextField id="outlined-basic" onChange={enterFirstName} error={regexObj.firstnameborder} helperText={regexObj.firstnamehelper} label="First name" variant="outlined" size='small' />
            <TextField id="outlined-basic" onChange={enterLastName} error={regexObj.lastnameborder} helperText={regexObj.lastnamehelper} label="Last name" variant="outlined" size='small' />
            </div>
            <div className='username'>
            <TextField id="outlined-basic" onChange={enterEmail} error={regexObj.emailborder} helperText={regexObj.emailhelper} label="Username" variant="outlined" size='small' margin='normal'fullWidth='bool' />
            </div>
            <div className='paragraph'>
              <p>You can use Letters,numbers or Periods</p> 
            </div>
            <div className='current'>
            <Button href="#text-buttons">Use my current email address instead</Button>
            </div>
            <div className='password'>
            <TextField id="outlined-basic" onChange={enterPassword} error={regexObj.passwordborder} helperText={regexObj.passwordhelper} label="Password" variant="outlined" size='small'/>
            <TextField id="outlined-basic" onChange={confirmPassword} error={regexObj.confirmpasswordborder} helperText={regexObj.confirmpasswordhelper} label="Confirm Password" variant="outlined" size='small'/>
            </div>
            <div className='paragraph1'>
              <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>
            </div>
            <div className='checkbox'>
              <input type= 'checkbox' value='Show Password' name = 'Show Password' /> <label>Show Pasword</label>
            </div>
            <div className='signin'>
              <Button href="#text-buttons">Sign in instead</Button>
            </div>
            <div className='next'>
              <Button variant="contained" size='small' onClick={accountCreated} > Next </Button>
            </div>
          </div>
        </div>
        <div className='logo'>
         <div>
          <img src='./assets/SignUp-image.jpeg' alt="image"/>
         </div>
         <div class='para'>
           <p>One account. All of Fundoo working for you.</p>
         </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp