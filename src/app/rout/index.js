import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Header from "./Header/Header";
import { Drawer } from "@material-ui/core";
import { DataTable } from "./Table/DataTable";
import ItemList from "./Header/DrawerMenu";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "../Components/pagination";
const MainLayout = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
    if (open == true) setOpen(false);
  };
 
  return (
    <Grid style={{ textAlign: "center" }}>
      <Header open={open} handleClick={handleClick} />

      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            top: "60px !important",
            position: "absolute !important",
            overflowY: "unset !important",
          },
          width: 512,
          flexShrink: 0,
          boxShadow: "-5px 1px 5px 0px #0000000D",
        }}
        className={classes.Drawer}
        open={open}
        variant="persistent"
        anchor="right"
      >
        <ItemList />
      </Drawer>
      <DataTable />
      <Grid>
       <Pagination />
      </Grid>
    </Grid>
  );
};
const useStyles = makeStyles((theme) => ({
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: "510px",
  },
  Drawer: {
    backgroundColor: `blue !important`,
    width: 512,
    height: "100%",
    flexDirection: "column",
    overflowY: "auto",
    "& .MuiDrawer-paper": {
      position: "fixed !important",
      top: "58px",
    },
    zIndex: 1,
  },
}));

export default MainLayout;
