import React from 'react'
import './Navbar.css'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PhotoLibraryRoundedIcon from '@mui/icons-material/PhotoLibraryRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';

function NavBar() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <PhotoLibraryRoundedIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Gallery" onClick={() => {
                        window.scroll({
                            top: document.body.scrollHeight *0.6,
                            behavior: 'smooth'
                        });
                    }} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ConnectWithoutContactRoundedIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Contact Us" onClick={() => {
                        window.scroll({
                            top: document.body.scrollHeight,
                            behavior: 'smooth'
                        });
                    }} />
                </ListItemButton>
              </ListItem>
          </List>
          <Divider />
        </Box>
      );
    return (
    <div id="navbar">
        <div id='logo-container'>
            <div id='logo'></div>
        </div>
        <IconButton onClick={toggleDrawer(true)}><MenuRoundedIcon color='info' fontSize='large'/></IconButton>
        <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
        </Drawer>
    </div>
    )
}

export default NavBar