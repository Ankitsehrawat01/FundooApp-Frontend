import React, { useState } from 'react'
import '../TakeNote2/TakeNote2.css'
import InputBase from '@mui/material/InputBase';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import { IconButton, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { createNoteAPI } from '../../Pages/Services/dataService';
import ColorPopper from '../ColorPopper/ColorPopper';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    note2: {
        width: '40vw',
        height: '20vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        border: '0px solid #cecdcd',
        bottom: '55px',
        left: '400px'
    },
    noteicon: {
        height: '70%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        border: '0px solid red'
    },
    txt: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        height: '33%',
        left: '10px',
        top: '15px',
        width: '80%'
    },
    input2: {
        bottom: '5px',
        rowGap: '10px',
        fontSize: '15px',
        border: 'none',
        width: '100%'
    },
    finalicon: {
        height: '70%',
        width: '95%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    // isons2: {
    //     display:'flex',
    //     width:'100%',
    //     justifyContent:'space-between',
    // },
    // Close: {
    //     position:'relative',
    //     right:'20px'
    // },

    ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
        note2: {
            width: '75vw',
            display: 'flex',
            position: 'relative',
            left: '70px'
        },
        finalicon: {
            height: '70%',
            width: '100%',
            flexDirection: 'column'
        },
    },
    ['@media only screen and (min-width: 481px) and (max-width: 768px)']: {
        note2: {
            width: '85vw',
            display: 'flex',
            position: 'relative',
            left: '70px'
        },
        finalicon: {
            height: '70%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
        },
    },

    ['@media only screen and (min-width: 769px) and (max-width: 1024px)']: {
        note2: {
            width: '65vw',
            display: 'flex',
            position: 'relative',
            left: '80px'
        },
        finalicon: {
            height: '70%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
        },
    }
})


function TakeNote2(props) {

    const classes1 = useStyle()

    const [createnote, setCreateNote] = useState({
        title: '',
        discription: '',
        archive: false,
        backgroundcolor: ''
    })
    const takeTitle = (event) => {
        setCreateNote(prevState => ({ ...prevState, title: event.target.value }))
    }

    const takeDescription = (event) => {
        setCreateNote(prevState => ({ ...prevState, discription: event.target.value }))
    }

    const notesArchive = () => {
        setCreateNote(prevState => ({ ...prevState, archive: true }))
        console.log('Archive Successful')
    }

    const openColorPopper = (colour) => {
        setCreateNote(prevState => ({ ...prevState, backgroundcolor: colour }))
    }

    const Create = () => {
        props.closeTakeNote2()
        createNoteAPI(createnote)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => { console.log(error) })
        console.log("Notes Created")
    }

    return (
        <Box>
            <Paper className={classes1.note2} style={{ backgroundColor: createnote.backgroundcolor }} elevation={5}>

                <Box className={classes1.noteicon}>
                    <Box className={classes1.txt}>
                        <InputBase className={classes1.input2} placeholder="Title.." onChange={takeTitle} />
                        <InputBase className={classes1.input2} placeholder="Take a note..." onChange={takeDescription} />
                    </Box>
                    <Box>
                        <Tooltip>
                            <IconButton> <PushPinOutlinedIcon /> </IconButton>
                        </Tooltip>
                    </Box>
                </Box>

                <Box className={classes1.finalicon}>
                    <Box className={classes1.icons2}>
                        <Tooltip title='Remind me'>
                            <IconButton ><AddAlertOutlinedIcon size='small'/> </IconButton>
                        </Tooltip>
                        <Tooltip title='Collabrator'>
                            <IconButton> <PersonAddAlt1OutlinedIcon size='small' /> </IconButton>
                        </Tooltip>
                        <Tooltip title='color'>
                            <IconButton> <ColorPopper size='small' action="create" openColorPopper={openColorPopper} /> </IconButton>
                        </Tooltip>

                        <Tooltip title='Image'>
                            <IconButton > <ImageOutlinedIcon size='small' /> </IconButton>
                        </Tooltip>
                        <Tooltip title='Archive' onClick={notesArchive} >
                            <IconButton> <ArchiveOutlinedIcon size='small'/> </IconButton>
                        </Tooltip>
                        <Tooltip title='More'>
                            <IconButton> <MoreVertOutlinedIcon size='small' /> </IconButton>
                        </Tooltip>
                        <Tooltip title='Undo'>
                            <IconButton> <UndoOutlinedIcon size='small' /> </IconButton>
                        </Tooltip>
                        <Tooltip>
                            <IconButton> <RedoOutlinedIcon size='small'/> </IconButton>
                        </Tooltip>
                    </Box>
                    <Box className={classes1.Close}>
                        <IconButton size='small' onClick={Create}>Close</IconButton>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default TakeNote2
