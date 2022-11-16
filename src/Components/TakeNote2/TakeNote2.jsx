import React from 'react'
import '../TakeNote2/TakeNote2.css'
import InputBase from '@mui/material/InputBase';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import { Button, IconButton, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';



function TakeNote2() {
  return (
    <div>
        <Box className='container2'>
            <Paper className='note2'>
                <Box className='noteicon'>
                    <Box className='txt'>
                        <InputBase className='input2' placeholder="Title.."/>
                        <InputBase className='input2' placeholder="Take a note..." />
                    </Box>
                    <div className='pinicon'>
                        <Tooltip>
                            <IconButton> <PushPinOutlinedIcon/> </IconButton>
                        </Tooltip>
                    </div>
                </Box>

                <Box className="icons2">
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
                        <div className='closebutton'>
                            <IconButton size='small'>Close</IconButton>
                        </div>
                </Box>
            </Paper>
        </Box>
    </div>
  )
}

export default TakeNote2
