import React from "react"
import Button from '@material-ui/core/Button';
//import { Link } from 'react-router-dom'

const handleClick = (evt, props) => {
    console.log("clicked");
        props.loggedIn = false
        console.log(props.loggedIn)
}

const LogoutButton = () => {
    return (
        <div align="center">
            <br />
            <br />
            <Button variant="contained" color="primary" onClick={handleClick}>Log Out</Button>
        </div>
    )
}

export default LogoutButton