import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 5,
  },
  flex:{
    display: "flex",
    justifyContent: "space-between"
  }
}));

export default function Bar({favorites}) {
  const history = useHistory()
  function handleClick() {
    history.push("/favorite")
  }
  function handleClickHome() {
    history.push("/")
  }
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.flex} variant="dense">
          <Button onClick={handleClickHome} variant="contained" color="primary">
            Mars Rover Photos 
          </Button>
          {!favorites&&
          <Button onClick={handleClick} variant="contained" color="primary" >
            favorites
          </Button>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}