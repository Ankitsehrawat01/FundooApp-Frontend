import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { ForkLeft } from '@mui/icons-material';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  marginTop: 75,
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    marginTop: 75,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const selectOption = (notechoice) => {
    props.headerDrwaer1(notechoice)
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={props.drawerToggle}>
        <List>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>selectOption("Notes")}>
              <ListItemButton>
                <ListItemIcon >
                 <LightbulbOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary = "Notes" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>selectOption("Reminder")}>
              <ListItemButton>
                <ListItemIcon>
                 <AddAlertOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary = "Reminder" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>selectOption("Edit")}>
              <ListItemButton>
                <ListItemIcon>
                 <LabelOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary = "Edit Label" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>selectOption("Archive")}>
              <ListItemButton>
                <ListItemIcon>
                 <ArchiveOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary = "Archive" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'flex' }}  onClick={()=>selectOption("Trash")} >
              <ListItemButton>
                <ListItemIcon>
                 <DeleteIcon />
                </ListItemIcon>
                <ListItemText primary = "Trash"/>
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}