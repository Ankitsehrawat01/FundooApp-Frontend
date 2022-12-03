import React, { useState } from 'react'
import './SignUp.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { signUpApi } from '../Services/userService';
import { useNavigate } from 'react-router-dom';
import { Box, Card, Paper, Typography } from '@mui/material';
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
    top: '70px',
    border: '0px solid red'
  },
  main: {
    border: '0px solid red',
    height: '100%',
    width: '55%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    left: '20px'
  },
  title: {
    fontSize: '35px',
    display: 'flex',
    position: 'relative'
  },
  subtitle: {
    display: 'flex',
    position: 'relative',
  },
  first: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    top: '30px'
  },
  username: {
    display: 'flex',
    position: 'relative',
    top: '30px'
  },
  paragraph: {
    display: 'flex',
    position: 'relative',
    top: '30px'
  },
  current: {
    display: 'flex',
    position: 'relative',
    top: '30px'
  },
  password: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    top: '50px'
  },
  paragraph1: {
    fontSize: '1px',
    height: '3vh',
    width: '30vw',
    border: '0px solid black',
    position: 'relative',
    top: '50px'
  },
  checkbox: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    top: '50px'
  },
  below: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'space-between',
    top: '100px'
  },
  logo: {
    display: 'flex',
    flexDirection: 'column',
    border: '0px solid black',
    position: 'relative',
    bottom: '20px',
    border: '0px solid black',
    left: '40px'
  },
  image: {
    display: 'flex',
    position: 'relative',
    left: '40px'
  },
  para: {
    display: 'flex',
    position: 'relative',
    border: '0px solid black',
    width: '80%'
  },
  ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
    reg: {
      width: '95vw',
      height: '90vh',
      left: '10px',
      top: '10px'
    },
    main: {
      border: '0px solid red',
      height: '70vh',
      width: '90%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      left: '20px',
      bottom: '50px'
    },
    first: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      top: '30px',
      rowGap: '5px'
    },
    password: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      top: '50px',
      rowGap: '5px',
      width: '100%'
    },
    paragraph1: {
      fontSize: '1px',
      height: '3vh',
      width: '30vw',
      border: '0px solid black',
      position: 'relative',
      top: '50px',
      width: '100%'
    },
    checkbox: {
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
      top: '70px'
    },
    logo: {
      display: 'none'
    },

  },
  ['@media only screen and (min-width: 481px) and (max-width: 768px)']: {
    reg: {
      width: '95vw',
      height: '90vh',
      left: '10px',
      top: '10px'
    },
    main: {
      border: '0px solid red',
      height: '70vh',
      width: '90%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      left: '20px',
      bottom: '50px'
    },
    first: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      top: '30px',
      rowGap: '5px'
    },
    password: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      top: '50px',
      rowGap: '5px',
      width: '100%'
    },
    paragraph1: {
      fontSize: '1px',
      height: '3vh',
      width: '30vw',
      border: '0px solid black',
      position: 'relative',
      top: '50px',
      width: '100%'
    },
    checkbox: {
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
      top: '70px'
    },
    logo: {
      display: 'none'
    },
  },
  ['@media only screen and (min-width: 769px) and (max-width: 1024px)']: {
    reg: {
      width: '75vw',
      height: '80vh',
      left: '100px',
      top: '60px'
    },
    main: {
      border: '0px solid red',
      height: '70vh',
      width: '90%',
      display: 'flex',
      position: 'relative',
      left: '20px',
      bottom: '30px'
    },
    first: {
      display: 'flex',
      position: 'relative',
      top: '30px',
      rowGap: '5px'
    },
    password: {
      display: 'flex',
      position: 'relative',
      top: '50px',
      rowGap: '5px',
      width: '100%'
    },
    paragraph1: {
      fontSize: '1px',
      height: '3vh',
      width: '30vw',
      border: '0px solid black',
      position: 'relative',
      top: '50px',
      width: '100%'
    },
    checkbox: {
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
      top: '70px'
    },
    image: {
      display: 'flex',
      position: 'relative',
      left: '5px'
    },
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
  const navigate = useNavigate()

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
        .then((response) => { console.log(response);navigate('/') })
        .catch((error) => { console.log(error) })
      console.log("Account Created")
    }
  }
  const SigninPage = () => {
    navigate('/')
  }

  return (
    <Box className={classes4.mainbox}>
      <Card className={classes4.reg} elevation={5}>
        <Box className={classes4.main}>
          <Box className={classes4.title}> Fundoo</Box>
          <Box className={classes4.subtitle}> Create your Fundoo Account</Box>
          <Box className={classes4.first}>
            <TextField className={classes4.firstname} id="outlined-basic" onChange={enterFirstName} error={regexObj.firstnameborder} helperText={regexObj.firstnamehelper} label="First name" variant="outlined" size='small' />
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
            <TextField id="outlined-basic" onChange={enterPassword} error={regexObj.passwordborder} helperText={regexObj.passwordhelper} label="Password" variant="outlined" size='small' />
            <TextField id="outlined-basic" onChange={confirmPassword} error={regexObj.confirmpasswordborder} helperText={regexObj.confirmpasswordhelper} label="Confirm Password" variant="outlined" size='small' />
          </Box>
          <Box className={classes4.paragraph1}>
            <Typography style={{ fontSize: 13 }}>Use 8 or more characters with a mix of letters, numbers & symbols</Typography>
          </Box>
          <Box className={classes4.checkbox}>
            <input type='checkbox' value='Show Password' name='Show Password' /> <label>Show Pasword</label>
          </Box>
          <Box className={classes4.below}>
            <Box>
              <Button onClick={SigninPage}>Sign in instead</Button>
            </Box>
            <Box >
              <Button variant="contained" size='small' onClick={accountCreated} > Next </Button>
            </Box>
          </Box>
        </Box>
        <Box className={classes4.logo}>
          <Box className={classes4.image}>
            <img src='./assets/SignUp-image.jpeg' alt="image" style={{ height: '25vh', width: '25vh' }} />
          </Box>
          <Box className={classes4.para}>
            <Typography>One account. All of Fundoo working for you.</Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  )
}

export default SignUp