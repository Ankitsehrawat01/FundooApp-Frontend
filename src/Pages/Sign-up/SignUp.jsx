import React, { useState } from 'react'
import './SignUp.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { signUpApi } from '../Services/userService';

function SignUp() {

  return (
    <div>
      <form className='reg'>
        <div className='main'>
          <div className='title'> Fundoo</div>
          <div className='sub-title'> Create your Fundoo Account</div>

          <div className='fieldclass'>
            <div className='first'>
            <TextField id="outlined-basic" label="First name" variant="outlined" size='small' />
            <TextField id="outlined-basic" label="Last name" variant="outlined" size='small' />
            </div>
            <div className='username'>
            <TextField id="outlined-basic" label="Username" variant="outlined" size='small' margin='normal'fullWidth='bool' />
            </div>
            <div className='paragraph'>
              <p>You can use Letters,numbers or Periods</p> 
            </div>
            <div className='current'>
            <Button href="#text-buttons">Use my current email address instead</Button>
            </div>
            <div className='password'>
            <TextField id="outlined-basic" label="Password" variant="outlined" size='small'/>
            <TextField id="outlined-basic" label="Confirm Password" variant="outlined" size='small'/>
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
              <Button variant="contained" size='small'> Next </Button>
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