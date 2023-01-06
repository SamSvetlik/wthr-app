import React from "react"
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

const Hamburger = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const openHamburger = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const closeHamburger = () => {
      setAnchorEl(null);
    };

    return(
        <>
        <Button
        id="hamburger-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={openHamburger}
        >
            <MenuIcon />
        </Button>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={closeHamburger}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
            <MenuItem onClick={closeHamburger}>Get Weather for Somewhere Else</MenuItem>
            <MenuItem onClick={closeHamburger}>Settings</MenuItem>
            <MenuItem onClick={closeHamburger}>Feedback</MenuItem>
        </Menu>
        </>
    )
}

export default Hamburger