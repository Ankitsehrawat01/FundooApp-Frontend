import React from 'react'
import '../TakeNote3/TakeNote3.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { IconButton, Tooltip } from '@mui/material';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { archiveNoteAPI } from '../../Pages/Services/dataService';

function TakeNote3(props) {
    const archiveNotes=(id)=>{
         archiveNoteAPI(id)
        .then((response)=>console.log(response))
        .catch((error)=>console.log(error))
        console.log('Archive Successful')
  }
  return (
    <div>
        <Box className='container3'>
            <Paper className='note3'>
                <Box className='noteicon2'>
                    <Box className='txt2'>
                    <span className='input3'>{props.note.title}</span>
                    <span className='input3'>{props.note.discription}</span>
                        {/* <InputBase className='input3' placeholder="Title.."/>
                        <InputBase className='input3' placeholder="Take a note..." /> */}
                    </Box>
                    <div className='pinicon2'>
                        <Tooltip>
                            <IconButton> <PushPinOutlinedIcon/> </IconButton>
                        </Tooltip>
                    </div>
                </Box>

                <Box className="icons3">
                       <Tooltip title='Remind me'>
                        <IconButton><AddAlertOutlinedIcon /> </IconButton>
                        </Tooltip> 
                        <Tooltip title='Collabrator'>
                            <IconButton> <PersonAddAlt1OutlinedIcon/> </IconButton>
                        </Tooltip>
                        <Tooltip title='color'>
                            <IconButton> <ColorLensIcon /> </IconButton>
                        </Tooltip>
                        <Tooltip title='Image'>
                            <IconButton> <ImageOutlinedIcon /> </IconButton>
                        </Tooltip>
                        <Tooltip title='Archive' onClick={ () => archiveNotes(props.note.noteId)}>
                            <IconButton> <ArchiveOutlinedIcon /> </IconButton>
                        </Tooltip>
                        <Tooltip title='More'>
                            <IconButton> <MoreVertOutlinedIcon /> </IconButton>
                        </Tooltip>
                </Box>
            </Paper>
        </Box>
    </div>
  )
}

export default TakeNote3
