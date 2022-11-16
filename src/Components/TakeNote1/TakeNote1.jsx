import React from 'react'
import '../TakeNote1/TakeNote1.css'
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';


function TakeNote1() {
  return (
    <div>
        <div className= 'container1'>
            <div className='note'>
                <div className='textbox'>
                    <InputBase type="text" id="title" name="title" placeholder="Take a note..." />
                </div>
                <div className='icons'>
                    <IconButton> <CheckBoxOutlinedIcon /> </IconButton>
                    <IconButton> <BrushOutlinedIcon /> </IconButton>
                    <IconButton> <ImageOutlinedIcon /> </IconButton>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TakeNote1
