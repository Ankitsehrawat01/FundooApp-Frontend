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
    container2: {
        width: '100vw',
        height: '30vh',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative',
        bottom: '30px'
    },
    note2: {
        width: '39%',
        height: '65%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        border: '1px solid #cecdcd',
        borderRadius: '8px',
        rowGap: '6px'
    },
    noteicon: {
        height: '70%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        border: '0px solid red'
    },
    txt: {
        height: '33%',
        marginLeft: '10px',
        marginTop: '15px',
        width: '80%'
    },
    input2: {
        bottom: '5px',
        rowGap: '10px',
        fontSize: '15px',
        border: 'none',
        width: '100%'
    },
    pinicon: {
        border: '0px solid black',
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '70px',
        width: '20%'
    },
    closebutton: {
        display: 'flex',
        position: 'relative',
        right: '5%'
    },
    finalicon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
            <Box className={classes1.container2}>
                <Paper className={classes1.note2} style={{ backgroundColor: createnote.backgroundcolor }} elevation={5}>
                    <Box className={classes1.noteicon}>
                        <Box className={classes1.txt}>
                            <InputBase className={classes1.input2} placeholder="Title.." onChange={takeTitle} />
                            <InputBase className={classes1.input2} placeholder="Take a note..." onChange={takeDescription} />
                        </Box>
                        <Box className={classes1.pinicon}>
                            <Tooltip>
                                <IconButton> <PushPinOutlinedIcon /> </IconButton>
                            </Tooltip>
                        </Box>
                    </Box>
                    <Box className={classes1.finalicon}>
                        <Box className={classes1.icons2}>
                            <Tooltip title='Remind me'>
                                <IconButton><AddAlertOutlinedIcon /> </IconButton>
                            </Tooltip>
                            <Tooltip title='Collabrator'>
                                <IconButton> <PersonAddAlt1OutlinedIcon /> </IconButton>
                            </Tooltip>
                            <Tooltip title='color'>
                                <IconButton> <ColorPopper action="create" openColorPopper={openColorPopper} /> </IconButton>
                            </Tooltip>

                            <Tooltip title='Image'>
                                <IconButton> <ImageOutlinedIcon /> </IconButton>
                            </Tooltip>
                            <Tooltip title='Archive' onClick={notesArchive} >
                                <IconButton> <ArchiveOutlinedIcon /> </IconButton>
                            </Tooltip>
                            <Tooltip title='More'>
                                <IconButton> <MoreVertOutlinedIcon /> </IconButton>
                            </Tooltip>
                            <Tooltip title='Undo'>
                                <IconButton> <UndoOutlinedIcon /> </IconButton>
                            </Tooltip>
                            <Tooltip>
                                <IconButton> <RedoOutlinedIcon /> </IconButton>
                            </Tooltip>
                        </Box>
                        <Box className={classes1.closebutton}>
                            <IconButton size='small' onClick={Create}>Close</IconButton>
                        </Box>

                    </Box>
                </Paper>
            </Box>
        </Box>
    )
}

export default TakeNote2
