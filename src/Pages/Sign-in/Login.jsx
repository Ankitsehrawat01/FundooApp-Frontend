import React, { useState } from 'react'
import './Login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, Paper, Typography, useStepContext } from '@mui/material';
import { loginApi } from '../Services/userService';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { fontSize, fontWeight, width } from '@mui/system';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const useStyle = makeStyles({
  log: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    marginTop: '8%',
    height: '70vh',
    width: '32vw',
    left: '500px'
  },
  topbox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
   
  },
  Head: {
    padding: '10px',
    top: '20px',
    fontSize: '25px',

  },
  subhead: {
    padding: '3px',
    fontSize: '18px'
  },
  inp: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    left: '40px',
    top: '15px'
  },
  textfield: {
    display: 'flex',
    textAlign: 'center',
    width: '410px'
  },
  forgotbtn: {
    display: 'flex',
    position: 'relative',
    left: '30px',
    top: '8px'
  },
  typetext: {
    display: 'flex',
    position: 'relative',
    top: '30px',
    left: '40px'
  },
  learnbtn: {
    display: 'flex',
    position: 'relative',
    top: '30px',
    left: '35px'
  },
  loginbtn: {
    display: 'flex',
    position: 'relative',
    right: '50px',
    top: '60px'
  },
  createlink: {
    display: 'flex',
    position: 'relative',
    left: '30px',
    top: '60px'
  },
  bottompart: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {

    log: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      height: '0vh',
      width: '32vw',
      left: '30px'
    },
    topbox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '250%'
     
    },
    inp: {
      width: '250%',
      left: '2px',
    },
    forgotbtn: {
     left: '5px',
     width: '200%'
    },
    typetext: {
      
      width: '250%',
      left: '0px'
    }, 
    learnbtn: {
      left: '0px',
      width: '200%'
    },
    bottompart: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      width: '280%',
      left: '0px'
    },
    createlink: {
      left: '0px',
    },
    loginbtn: {
      display: 'flex',
      position: 'relative',
      top: '60px'
    },
  },
  ['@media only screen and (min-width: 481px) and (max-width: 768px)']: {
    log: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      height: '0vh',
      width: '32vw',
      left: '80px'
    },
    topbox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '250%'
    },
    inp: {
      width: '250%',
      left: '2px',
    },
    textfield: {
      width: '800px'
    },
    forgotbtn: {
     left: '5px',
     width: '200%'
    },
    typetext: {
      
      width: '250%',
      left: '0px'
    }, 
    learnbtn: {
      left: '0px',
      width: '200%'
    },
    bottompart: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      width: '280%',
      left: '0px'
    },
    createlink: {
      left: '0px',
    },
    loginbtn: {
      display: 'flex',
      position: 'relative',
      top: '60px',
    },

  },

  ['@media only screen and (min-width: 769px) and (max-width: 1024px)']: {
    log: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      position: 'relative',
      marginTop: '8%',
      height: '75vh',
      width: '60vw',
      top: '50px',
      left: '140px'
    },
    textfield: {
      display: 'flex',
      textAlign: 'center',
    },
    inp: {
      width: '100%',
      left: '2px',
    },
    forgotbtn: {
      left: '5px',
      width: '100%'
     },
     typetext: {
      width: '100%',
      left: '0px'
    },
    learnbtn: {
      left: '0px',
      width: '100%'
    },
    bottompart: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      width: '100%',
      left: '4px'
    },
    // loginbtn: {
    //   display: 'flex',
    //   position: 'relative',
    //   top: '60px',
    // },
    // createlink: {
    //   display: 'flex',
    //   position: 'relative',
    //   top: '60px',
    // },

  }

})

function Login() {

  const classes3 = useStyle()

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
  const navigate = useNavigate()

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
    if (checkemail === true && checkpassword === true) {
      loginApi(signinobj)
        .then((response) => {
          console.log(response)
          localStorage.setItem("token", response.data.data)
          navigate('/dashboard')
        })
        .catch((error) => { console.log(error) })
      console.log("login successful")
    }
  }
  const createAcc = () => {
    navigate('/signup')
  }

  return (
    <Box >
      <Paper className={classes3.log} elevation={5}>
        <Box className={classes3.topbox}>
          <Box className={classes3.Head}>Fundoo</Box>
          <Box className={classes3.subhead} > Sign-In</Box>
          <Box className={classes3.subhead}>Use your Fundoo Account</Box>
        </Box>
        <Box  className={classes3.secondbox}>
          <Box className={classes3.inp}>
            <TextField className={classes3.textfield} onChange={takeEmail} error={regexObj.emailborder} helperText={regexObj.emailhelper} id="outlined-basic" label="Enter your Email" variant="outlined" margin='normal' />
          </Box>
          <Box className={classes3.inp}>
            <TextField className={classes3.textfield} onChange={takePassword} error={regexObj.passwordborder} helperText={regexObj.passwordhelper} id="outlined-basic" label="Password" variant="outlined" margin='normal' />
          </Box>
        </Box>
        <Box>
          <Box className={classes3.forgotbtn}>
            <Button href="#text-buttons">Forget Password ?</Button>
          </Box>
          <Box>
            <Box className={classes3.typetext}>
              <Typography>Not your computer? Use Guest mode to sign in privately.</Typography>
            </Box>
            <Box className={classes3.learnbtn}>
              <Button href="#text-buttons">Learn more</Button>
            </Box>
          </Box>
          <Box className={classes3.bottompart}>
            <Box className={classes3.createlink}>
              <Button onClick={createAcc}>Create Account</Button>
            </Box>
            <Box className={classes3.loginbtn}>
              <Button variant="contained" size='small' onClick={loginSuccessful}>Login</Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

export default Login