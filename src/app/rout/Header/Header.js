import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const Header = ({ handleClick }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{ backgroundColor: "blue" }}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Grid>
          <IconButton color="inherit"> </IconButton>
          <Button className={classes.buttonHeader}>mahsa</Button>
          <IconButton color="inherit"> </IconButton>
          <Button className={classes.buttonHeader}>mahsa</Button>
          <IconButton color="inherit"> </IconButton>
          <Button className={classes.buttonHeader}>mahsa</Button>
        </Grid>
        <Grid>
          <IconButton color="inherit"> </IconButton>
          <Button className={classes.buttonHeader} onClick={handleClick}>
            لیست ثابت ها
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
const useStyles = makeStyles((theme) => ({
  buttonHeader: {
    color: "white",
    fontFamily: "sans-serif",
    fontWeight: "500",
  },
}));

export default Header;
