import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
        marginLeft: theme.spacing(74.5),
    },
  }));

const AddFooter = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Link to='/AddBusiness'>
              <Button color="white" className={classes.title}>Add Listing</Button>
              </Link>
            </Toolbar>
          </AppBar>
        </div>
      );
}  
export default AddFooter