import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import "../css/NavBar.css"
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
        marginRight: theme.spacing(118),
    },
  }));

const NavBar = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography edge="start" variant="h6" className={classes.title}>
                Austin Small Businesses
              </Typography>
              <Link to='/Login'>
              <Button color="white">Login</Button>
              </Link>
              <Link to='/'>
              <Button color="white">Listings</Button>
              </Link>
            </Toolbar>
          </AppBar>
        </div>
      );
    
}

export default NavBar