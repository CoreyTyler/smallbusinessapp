import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../css/Login.css"


const handleClick = (evt, props) => {
        console.log("clicked");
        props.loggedIn = true
        console.log(props.loggedIn)
      };

const Login = () => {
        return (
          <div>
            <div class="logBox" align="center">
            <br />
            <br />
            <br />
            <br />
            <TextField required id="standard-required" label="Username" />
            <br />
            <br />
            <TextField
          id="standard-password-input"
          label="Password *"
          type="password"
          autoComplete="current-password"
        />
            <br />
            <br />
            <br />
            <Button onClick={handleClick} variant="contained" color="primary">
              Login
            </Button>
          </div>
          </div>
        );
      }



export default Login