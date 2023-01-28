import React, { useState, useEffect } from "react"
import axios from "axios";
import { Button, Box, Modal, TextField } from '@mui/material';


const Login = (props) => {
    const { setUser, token, setToken } = props
    
    const [isOpen, setIsOpen] = useState(false);
    
    const loginPopover = () => {
        setIsOpen(!isOpen);
    };

    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    useEffect(()=> {
        if (token) {
            axios.get(`https://wthr-backend.vercel.app/users/${email}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => setUser(response.data[0]))
        }
    }, [token, email, setUser])

    const storeEmail = (e) => {
        let newValue = e.target.value
        setEmail(newValue)
        }

    const storePassword = (e) => {
        let newValue = e.target.value
        setPassword(newValue)
        }

    const getToken = () => {
        axios.post('https://wthr-backend.vercel.app/signin', {
            email,
            password
        })
        .then((response)=> {
            // console.log(response)
            setToken(response.data.token)
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        getToken()
        loginPopover()
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        color: "#020203",
        bgcolor: '#6b728e',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        // backgroundColor: '#6b728e'
        };

    const colors = {
        one: "#020203",
        two: "#303250",
        three: "#50577a",
        four: "#6b728e"
        }

    return(
        <div>
        <Button
            variant="contained"
            sx={{bgcolor: colors.one, color: colors.four, '&:hover': {bgcolor: colors.two}}} 
            id="login-button"
            aria-controls={isOpen ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={isOpen ? 'true' : undefined}
            onClick={loginPopover}
        >
          Login
        </Button>
        <Modal open={isOpen} onClose={loginPopover}>
              <Box sx={style}>
                <form  style={{display: "grid"}} onSubmit={handleSubmit}>
                <TextField 
                  id="login-email" 
                  sx={{border: 2, borderRadius: 2, color: '#000000'}}
                  placeholder="email" 
                  type="email"
                  onKeyDown={(e) => e.stopPropagation()}
                  onChange={storeEmail} 
                  required 
                  />
                <TextField 
                  id="login-password" 
                  sx={{border: 2, borderRadius: 2, color: '#000000'}}
                  placeholder="password" 
                  type="password"
                  onKeyDown={(e) => e.stopPropagation()}
                  onChange={storePassword} 
                  required 
                  />
                  <Button variant="contained" sx={{bgcolor: colors.one, color: colors.four, '&:hover': {bgcolor: colors.two}}} type="submit">Login</Button>
                </form>
              </Box>
            </Modal>
        </div>
    )
}

export default Login