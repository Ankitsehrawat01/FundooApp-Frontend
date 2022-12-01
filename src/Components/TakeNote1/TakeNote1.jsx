import React from 'react'
import '../TakeNote1/TakeNote1.css'
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { Paper, Typography, Box } from '@mui/material';
import { AddBoxOutlined } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    container1: {
        width: '40vw',
        height: '7vh',
        border: ' 0px solid black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        bottom: '55px',
        left: '400px'
    },
    note: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        border: '1px solid #cecdcd',
        borderRadius: '8px',
        boxShadow: '2px 2px 6px rgba(139, 132, 132, 0.6)'
    },
    textbox: {
        display: 'flex',
        alignContent: 'flex-start',
        position: 'relative',
        left: '19px',
        outline: 'none',
        width: '75%',
        border: '0px solid red'
    },
    ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
        container1: {
            width: '75vw',
            left: '70px'
        },
        note: {
            width: '100%',
            height: '100%',
        },
        textbox: {
            width: '45%'
        },
    },
    ['@media only screen and (min-width: 481px) and (max-width: 768px)']: {
        container1: {
            width: '85vw',
            left: '70px'
        },
        note: {
            width: '100%',
            height: '100%',
        },
        textbox: {
            width: '70%'
        },
    },

    ['@media only screen and (min-width: 769px) and (max-width: 1024px)']: {
        container1: {
            width: '65vw',
            left: '80px'
        },
        note: {
            width: '100%',
            height: '100%',
        },
        textbox: {
            width: '70%'
        },

    }
})
function TakeNote1(props) {

    const classes = useStyle()

    const openNote = () => {
        props.openTakeNote2()
    }

    return (
        <Box>
            <Box className={classes.container1} onClick={openNote}>
                <Paper className={classes.note} elevation={5}>
                    <Box className={classes.textbox}>
                        {/* <InputBase type="text" id="title" name="title" placeholder="Take a note..." /> */}
                        <Typography>Take a note...</Typography>
                    </Box>
                    <Box className='icons'>
                        <IconButton> <CheckBoxOutlinedIcon /> </IconButton>
                        <IconButton> <BrushOutlinedIcon /> </IconButton>
                        <IconButton> <ImageOutlinedIcon /> </IconButton>
                    </Box>
                </Paper>
            </Box>
        </Box>
    )
}

export default TakeNote1
