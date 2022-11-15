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
import Button from '@mui/material/Button';

function Header() {
  return (
    <div className='container'>
        <div className="menu">
            <Button> <MenuIcon/> </Button>
            <img className='logo' src='./Assets/keeplogo.png' />
            <div className='keep'>Keep</div>
        </div>
        <div className="search">
            <div className='icon'><Button> <SearchIcon/> </Button></div>
            <div className='input'><InputBase placeholder="Search" /></div>
        </div>
        <div className="icons2">
            <Button> <RefreshIcon /> </Button>
            <Button> <ViewAgendaOutlinedIcon /> </Button>
            <Button> <SettingsOutlinedIcon/> </Button>
        </div>
        <div className="icons3">
          <Button> <AppsOutlinedIcon  /> </Button>
          <Button> <AccountCircleIcon /> </Button>
      </div>
    </div>
  )
}

export default Header
