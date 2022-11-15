import React, { useState } from 'react'
import './Login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useStepContext } from '@mui/material';
import { loginApi } from '../Services/userService';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function Login() {
  const [signinobj, setsigininobj] = useState({
    email: "",
    password: ""
  })
  const [regexObj, setRegexobj] = useState({
    emailborder: false,
    emailhelper: "",
    passwordborder: false,
    passwordhelper: ""
  })
  const takeEmail = (event) => {
    console.log(event.target.value)
    setsigininobj((prevState) => ({ ...prevState, email: event.target.value }))
  }
  const takePassword = (event) => {
    setsigininobj((prevState) => ({ ...prevState, password: event.target.value }))
  }
  const loginSuccessful = () => {
    console.log(signinobj)
    let checkemail = emailRegex.test(signinobj.email)
    let checkpassword = passwordRegex.test(signinobj.password)

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
    //API Call
     if(checkemail===true && checkpassword=== true)
    {
       loginApi(signinobj)
       .then((response)=>{console.log(response)})
       .catch((error)=>{console.log(error)})
       console.log("login successful")
    }
  }

  return (
    <div>
      <form className='log'>
        <div className='Head'> Fundoo</div>
        <div className='sub-head' > Sign-In</div>
        <div className='sub-head'>Use your Fundoo Account</div>
        <div >
          <div className='inp'>
            <TextField onChange={takeEmail} error={regexObj.emailborder} helperText={regexObj.emailhelper} id="outlined-basic" label="Enter your Email" variant="outlined" size='small' margin='normal' />
          </div>
          <div className='inp'>
            <TextField onChange={takePassword} error={regexObj.passwordborder} helperText={regexObj.passwordhelper} id="outlined-basic" label="Password" variant="outlined" />
          </div>
        </div>
        <div>
          <div className='forgot-btn'>
            <Button href="#text-buttons">Forget Password ?</Button>
          </div>
          <div>
            <p>Not your computer? Use Guest mode to sign in privately.</p>
            <div className='learn-btn'>
              <Button href="#text-buttons">Learn more</Button>
            </div>
          </div>
          <div className='login-btn'>
            <Button variant="contained" size='small' onClick={loginSuccessful}>Login</Button>
          </div>
        </div>
        <div className='createlink'>
          <Button href="#text-buttons">Create Account</Button>
        </div>
      </form>
    </div>
  )
}

export default Login