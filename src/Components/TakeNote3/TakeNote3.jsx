import React, { useState } from 'react'
import '../TakeNote3/TakeNote3.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Card, IconButton, InputBase, Tooltip } from '@mui/material';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { archiveNoteAPI, deleteNoteAPI, updateNoteAPI } from '../../Pages/Services/dataService';
import ColorPopper from '../ColorPopper/ColorPopper';
import Modal from '@mui/material/Modal';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { makeStyles } from '@mui/styles';

const useStyle= makeStyles({
    container3: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        border: '0px solid black',
        borderRadius: '10x',
        height: '23vh',
        position: 'relative',
        justifyContent: 'center',
        marginRight: '12px',
        bottom: '30px',
        marginBottom: '12px',
        boxShadow: '2px 2px 6px rgb(169, 158, 158)'
    },
    note3: {
        width: '20vw',
        height: '23vh'
    },
    noteicon2: {
        display: 'flex',
        flexDirection: 'row',
        height: '17vh'
    
    },
    txt2: {
        display: 'flex',
        flexDirection: 'column',
        height: '15vh',
        textAlign: 'start',
        paddingLeft: '10px',
        paddingTop: '10px'
    },
    input3: {
        display: 'flex',
        flexDirection: 'column',
        height: '5vh',
        width: '15vw'
    },
    icons3: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input4: {
        bottom: '10px',
        rowGap: '10px',
        fontSize: '15px',
        border: 'none',
        width: '100%'
    }
})

function TakeNote3(props) {

    const classes2 = useStyle()

    // for modal
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 620,
        height: 150,
        bgcolor: 'background.paper',
        border: '0px solid #000',
        boxShadow: 24,
        outline: 'none',
        border: 'none',
        
    };
    const [open, setOpen] = React.useState(false);
    const [modState, setModState] = useState({
        noteId: '',
        title: '',
        discription: '',
        backgroundcolor: ''
    })

    const handleOpen = (modalObj) => {
        setOpen(true)
        console.log(modalObj)
        setModState({
            noteId: modalObj.noteId,
            title: modalObj.title,
            discription: modalObj.discription,
            backgroundcolor: modalObj.backgroundcolor
        })
    };
    const handleClose = () => setOpen(false);

    //for archieve
    const archiveNotes = (id) => {
        archiveNoteAPI(id)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
        console.log('Archive Successful')
    }
    const colorUpdate = () => {
        props.getNote()
    }

    const deleteNotes = (id) => {
        deleteNoteAPI(id)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
        console.log('Delete Successful')
    }

    const takeTitle = (event) => {
        setModState(prevState => ({ ...prevState, title: event.target.value }))
    }

    const takeDescription = (event) => {
        setModState(prevState => ({ ...prevState, discription: event.target.value }))
    }

    const updateNoteBox = (noteId) => {
        setOpen(false)
        updateNoteAPI(noteId, modState)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
        console.log('Update Successful')
    }

    return (
        <Box>
            <Box className={classes2.container3}>
                <Card className={classes2.note3} style={{ backgroundColor: props.note.backgroundcolor }}>
                    <Box className={classes2.noteicon2}>
                        <Box className={classes2.txt2} onClick={() => handleOpen(props.note)} >
                            <span className={classes2.input3}>{props.note.title}</span>
                            <span className={classes2.input3}>{props.note.discription}</span>
                            {/* <InputBase className='input3' placeholder="Title.."/>
                        <InputBase className='input3' placeholder="Take a note..." /> */}
                        </Box>
                        <div className={classes2.pinicon2}>
                            <Tooltip>
                                <IconButton> <PushPinOutlinedIcon /> </IconButton>
                            </Tooltip>
                        </div>
                    </Box>

                    <Box className={classes2.icons3}>
                        <Tooltip title='Remind me'>
                            <IconButton><AddAlertOutlinedIcon /> </IconButton>
                        </Tooltip>
                        <Tooltip title='Collabrator'>
                            <IconButton> <PersonAddAlt1OutlinedIcon /> </IconButton>
                        </Tooltip>
                        <Tooltip title='color'>
                            <IconButton> <ColorPopper action="update" id={props.note.noteId} colorUpdate={colorUpdate} /> </IconButton>
                        </Tooltip>
                        <Tooltip title='Delete'>
                            <IconButton> <DeleteIcon onClick={() => deleteNotes(props.note.noteId)} /> </IconButton>
                        </Tooltip>
                        <Tooltip title='Archive' onClick={() => archiveNotes(props.note.noteId)}>
                            <IconButton> <ArchiveOutlinedIcon /> </IconButton>
                        </Tooltip>
                        <Tooltip title='More'>
                            <IconButton> <MoreVertOutlinedIcon /> </IconButton>
                        </Tooltip>
                    </Box>
                </Card>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} style={{ backgroundColor: props.note.backgroundcolor, padding: 10 }} >
                    <Box style={{position: 'relative', display: 'flex', flexDirection: 'row',justifyContent:'space-between'}}>
                        <Box>
                        <InputBase className={classes2.input4} defaultValue={modState.title} onChange={takeTitle} />
                        <InputBase className={classes2.input4} defaultValue={modState.discription} onChange={takeDescription} />
                        </Box>
                        <Box >
                        <Tooltip style={{marginTop:-5}}>
                            <IconButton> <PushPinOutlinedIcon/> </IconButton>
                        </Tooltip>
                        </Box>
                    </Box>
                    <Box style={{display: 'flex', flexDirection: 'row', position:'relative', top:30}}>
                        <Tooltip title='Remind me'>
                            <IconButton><AddAlertOutlinedIcon /> </IconButton>
                        </Tooltip>
                        <Tooltip title='Collabrator'>
                            <IconButton> <PersonAddAlt1OutlinedIcon /> </IconButton>
                        </Tooltip>
                        <Tooltip title='color'>
                            <IconButton> <ColorLensIcon/> </IconButton>
                        </Tooltip>

                        <Tooltip title='Image'>
                            <IconButton> <ImageOutlinedIcon /> </IconButton>
                        </Tooltip>
                        <Tooltip title='Archive'>
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
                        <Tooltip style={{display: 'flex', marginLeft: 200}}>
                            <IconButton size='small' onClick={() => updateNoteBox(modState.noteId)}>Close</IconButton>
                        </Tooltip>
                    </Box>
                </Box>
            </Modal>
        </Box>
    )
}

export default TakeNote3
