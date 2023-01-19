import React, { useState } from "react"
import { Button, Menu, MenuItem, Box, Modal, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Hamburger = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const openHamburger = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const closeHamburger = () => {
      setAnchorEl(null);
    };

    const [openModal1, setModal1] = useState(false)
    const [query, setQuery] = useState("")
 
    const handleTextChange = (e) => {
      let newQuery = e.target.value
      setQuery(newQuery)
    }
    const handleQuerySubmit = (e) => {
      e.preventDefault()
      props.setInput(query)
      setModal1(false)
      closeHamburger()
    }

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
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
            <MenuItem onClick={()=> setModal1(true)}>Get Weather for Somewhere Else</MenuItem>
            <Modal open={openModal1} onClose={()=> setModal1(false)}>
              <Box sx={style}>
                <form onSubmit={handleQuerySubmit} style={{display: "grid"}}>
                <TextField 
                  id="name" 
                  placeholder="Search by city, ZIP code, or lat/lng" 
                  type="search"
                  onKeyDown={(e) => e.stopPropagation()}
                  onChange={handleTextChange} 
                  required 
                  />
                  <Button variant="contained" color="primary" type="submit">Submit</Button>
                </form>
              </Box>
            </Modal>
            <MenuItem onClick={closeHamburger}>Settings</MenuItem>
            {/* <Modal>
              <Box>
                <h1>Modal two</h1>
              </Box>
            </Modal> */}
            <MenuItem onClick={closeHamburger}>Feedback</MenuItem>
            {/* <Modal>
              <Box>
                <h1>Modal three</h1>
              </Box>
            </Modal> */}
        </Menu>
        </>
    )
}

export default Hamburger