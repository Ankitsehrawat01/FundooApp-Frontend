import React from 'react';
import '../Header/Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';

function Header(props) {

    const openDrawerToggle = () => {
        props.headerDrawer()
    }
    return (
        <div className='container'>
            <div className="menu">
                <Tooltip title='Main-menu'>
                    <IconButton> <MenuIcon onClick={openDrawerToggle} /> </IconButton>
                </Tooltip>

                <img className='logo' src='./Assets/keeplogo.png' />
                <div className='keep'>Keep</div>

            </div>
            <div className="search">
                <div className='icon'><IconButton> <SearchIcon /> </IconButton></div>
                <div className='input'><InputBase placeholder="Search" /></div>
            </div>
            <div className="icons2">
                <Tooltip title='Refresh'>
                    <IconButton> <RefreshIcon /> </IconButton>
                </Tooltip>
                <Tooltip title='List-view'>
                    <IconButton> <ViewAgendaOutlinedIcon /> </IconButton>
                </Tooltip>
                <Tooltip title='Settings'>
                    <IconButton> <SettingsOutlinedIcon /> </IconButton>
                </Tooltip>

            </div>
            <div className='icons3'>
                <Tooltip title='Fundoo Apps'>
                    <IconButton> <AppsOutlinedIcon /> </IconButton>
                </Tooltip>
                <Tooltip title='Fundoo Accounts'>
                    <IconButton> <AccountCircleIcon /> </IconButton>
                </Tooltip>
            </div>
        </div>
    )
}

export default Header
