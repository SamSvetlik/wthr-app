import React from "react"
import { useState } from "react"
import { Button, Box, TextField } from "@mui/material"

const Signup = (props) => {
    const [createName, setCreateName] = useState("")
    const [createEmail, setCreateEmail] = useState("")
    const [createPassword, setCreatePassword] = useState("")
    const [createTemp, setCreateTemp] = useState("")

    const colors = {
        one: "#020203",
        two: "#303250",
        three: "#50577a",
        four: "#6b728e"
      }

    return(
        <form>
            <TextField required fullWidth margin="dense" label="Name"/>
            <TextField required fullWidth margin="dense" type="email" label="Email"/>
            <TextField required fullWidth margin="dense" label="Password"/>
            <TextField required fullWidth margin="dense" type="number" inputProps={ {min: 30, max: 100} } label="What is your ideal temperature?"/>
            <Button fullWidth variant="contained" sx={{bgcolor: colors.one, color: colors.four, '&:hover': {bgcolor: colors.two}}} type="submit">Register</Button>
        </form>
    )

}

export default Signup