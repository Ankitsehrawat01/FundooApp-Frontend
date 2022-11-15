import React, { useState } from 'react'
import './Login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useStepContext } from '@mui/material';
import { loginApi } from '../Services/userService';


function Login() {
  
  return (
    <div>
      <form className='log'>
        <div className='Head'> Fundoo</div>
        <div className='sub-head' > Sign-In</div>
        <div className='sub-head'>Use your Fundoo Account</div>
        <div >
          <div className='inp'>
            <TextField id="outlined-basic" label="Enter your Email" variant="outlined" size='small' margin='normal' />
          </div>
          <div className='inp'>
            <TextField id="outlined-basic" label="Password" variant="outlined" />
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
            <Button variant="contained" size='small' >Login</Button>
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