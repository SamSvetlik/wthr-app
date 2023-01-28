import React from "react"
import axios from "axios"
import { useState } from "react"
import { Button, TextField } from "@mui/material"

const Signup = (props) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [perfectTemp, setPerfectTemp] = useState("")

    const storeName = (e) => {
        let newValue = e.target.value
        setName(newValue)
    }
    const storeEmail = (e) => {
        let newValue = e.target.value
        setEmail(newValue)
    }
    const storePassword = (e) => {
        let newValue = e.target.value
        setPassword(newValue)
    }
    const storeTemp = (e) => {
        let newValue = e.target.value
        setPerfectTemp(newValue)
    }
    const createUser = () => {
        axios.post('https://wthr-backend.vercel.app/signup', {
            name,
            email,
            password,
            perfectTemp
        })
        .then((response)=> {
            // console.log(response)
            alert(`Signup successful!  You can now login with ${email}`)
            
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createUser()
        props.close(false)
        props.return()
    }

    const colors = {
        one: "#020203",
        two: "#303250",
        three: "#50577a",
        four: "#6b728e"
      }

    return(
        <form onSubmit={handleSubmit}>
            <TextField 
                required 
                fullWidth 
                margin="dense" 
                label="Name"
                onKeyDown={(e) => e.stopPropagation()}
                onChange={storeName}
                />
            <TextField 
                required 
                fullWidth 
                margin="dense" 
                type="email" 
                label="Email"
                onKeyDown={(e) => e.stopPropagation()}
                onChange={storeEmail}
                />
            <TextField 
                required 
                fullWidth 
                margin="dense" 
                label="Password"
                onKeyDown={(e) => e.stopPropagation()}
                onChange={storePassword}
                />
            <TextField 
                required 
                fullWidth 
                margin="dense" 
                type="number" 
                inputProps={ {min: 30, max: 100} } 
                label="What is your ideal temperature?"
                onKeyDown={(e) => e.stopPropagation()}
                onChange={storeTemp}
            />
            <Button 
                fullWidth 
                variant="contained" 
                sx={{bgcolor: colors.one, color: colors.four, '&:hover': {bgcolor: colors.two}}} 
                type="submit"
            >
                Register
            </Button>
        </form>
    )

}

export default Signup