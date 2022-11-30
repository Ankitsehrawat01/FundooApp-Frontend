import React, { useState } from 'react'
import './SignUp.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { signUpApi } from '../Services/userService';
import { useNavigate } from 'react-router-dom';
import { Box, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { width } from '@mui/system';

const useStyle = makeStyles({
  reg: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
    alignContent: 'center',
    width: '55vw',
    height: '80vh',
    left: '330px',
    top: '70px'
  },

  title: {
    fontSize: '35px',
    display: 'flex',
    position: 'relative',
    left: '10%'
  },
  subtitle: {
    display: 'flex',
    position: 'relative',
    left: '10%',
    marginBottom: '10%'
  },
  first: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    left: '10%',
  },
  username: {
    display: 'flex',
    position: 'relative',
    left: '10%',
  },
  paragraph: {
    display: 'flex',
    position: 'relative',
    left: '11%'
  },
  current: {
    display: 'flex',
    position: 'relative',
    left: '8%'
  },
  password: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    left: '10%',
    marginTop: '6%'
  },
  paragraph1: {
    fontSize: '1px',
    height: '3vh',
    width: '30vw',
    border: '0px solid black',
    position: 'relative',
    left: '3%'
  },
  checkbox: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    left: '10%'
  },
  below: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'space-between',
    left: '10%',
    marginTop: '12%'
  },
  logo: {
    display: 'flex',
    flexDirection: 'column',
    border: '0px solid black',
    position: 'relative',
    bottom: '20px',
    left: '10%'
  },
  image: {
    display: 'flex',
    position: 'relative',
    left: '7%'
  },
  para: {
    display: 'flex',
    position: 'relative',
    border: '0px solid black',
    width: '15vw'
  }


})

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const nameRegex = /^[A-Z]{1}[a-z]{2,}$/;

function SignUp() {

  const classes4 = useStyle()

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
    setsignupobj((prevState) => ({ ...prevState, firstName: event.target.value }))
  }
  const enterLastName = (event) => {
    console.log(event.target.value)
    setsignupobj((prevState) => ({ ...prevState, lastName: event.target.value }))
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
    if (checkFirstName === true && checkLastName === true && checkemail === true && checkpassword === true) {
      signUpApi(signupobj)
        .then((response) => { console.log(response) })
        .catch((error) => { console.log(error) })
      console.log("Account Created")
    }
  }

  return (
    <Box className={classes4.mainbox}>
      <Paper className={classes4.reg} elevation={5}>
        <Box className={classes4.main}>
          <Box className={classes4.title}> Fundoo</Box>
          <Box className={classes4.subtitle}> Create your Fundoo Account</Box>
            <Box className={classes4.first}>
              <TextField id="outlined-basic" onChange={enterFirstName} error={regexObj.firstnameborder} helperText={regexObj.firstnamehelper} label="First name" variant="outlined" size='small' />
              <TextField id="outlined-basic" onChange={enterLastName} error={regexObj.lastnameborder} helperText={regexObj.lastnamehelper} label="Last name" variant="outlined" size='small' />
            </Box>
            <Box className={classes4.username}>
              <TextField id="outlined-basic" onChange={enterEmail} error={regexObj.emailborder} helperText={regexObj.emailhelper} label="Username" variant="outlined" size='small' margin='normal' fullWidth='bool' />
            </Box>
            <Box className={classes4.paragraph}>
              <Typography style={{ fontSize: 13 }}>You can use Letters,numbers or Periods</Typography>
            </Box>
            <Box className={classes4.current}>
              <Button href="#text-buttons">Use my current email address instead</Button>
            </Box>
            <Box className={classes4.password}>
              <Box>
                <TextField id="outlined-basic" onChange={enterPassword} error={regexObj.passwordborder} helperText={regexObj.passwordhelper} label="Password" variant="outlined" size='small' />
              </Box>
              <Box>
                <TextField id="outlined-basic" onChange={confirmPassword} error={regexObj.confirmpasswordborder} helperText={regexObj.confirmpasswordhelper} label="Confirm Password" variant="outlined" size='small' />
              </Box>
            </Box>
            <Box className={classes4.paragraph1}>
              <Typography style={{ fontSize: 13 }}>Use 8 or more characters with a mix of letters, numbers & symbols</Typography>
            </Box>
            <Box className={classes4.checkbox}>
              <input type='checkbox' value='Show Password' name='Show Password' /> <label>Show Pasword</label>
            </Box>
            <Box className={classes4.below}>
              <Box>
                <Button href="#text-buttons">Sign in instead</Button>
              </Box>
              <Box >
                <Button variant="contained" size='small' onClick={accountCreated} > Next </Button>
              </Box>
            </Box>
        </Box>
        <Box className={classes4.logo}>
          <Box className={classes4.image}>
            <img src='./assets/SignUp-image.jpeg' alt="image" style={{ height: '25vh', width: '25vh'}} />
          </Box>
          <Box className={classes4.para}>
            <Typography>One account. All of Fundoo working for you.</Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

export default SignUp