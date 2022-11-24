import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { IconButton, Tooltip } from '@mui/material';

function ColorPopper(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const colors = ["#2ECC71", "#AF7AC5", "#F1948A", "#A3E4D7", "#F5B7B1", "#F5B041", "#DC7633", "#F1C40F", "#AAB7B8", "#F1948A", "#2ECC71", "#F5B041"]

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const applyColor =(color) => {
        props.openColorPopper (color)
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div>
            {/* <button aria-describedby={id} type="button" onClick={handleClick}>
        Toggle Popper
      </button> */}

            <ColorLensIcon onClick={handleClick} />

            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', display: 'flex', flexDirection:'row' }}>
                    {
                        colors.map((color) => (
                            <div style={{height:25, width:25, borderRadius:50, backgroundColor:color, marginRight:5 }} onClick={() => applyColor(color)}>

                            </div>
                        ))
                    }
                </Box>
            </Popper>
        </div>
    );
}

export default ColorPopper