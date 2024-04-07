import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
export const TableOperations = () => {
  return (
    <Grid container spacing={2}>
      <Grid  style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <IconButton></IconButton>
        <Button>دریافت خروجی</Button>
      </Grid>
      <Grid  style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <IconButton>+</IconButton>
        <Button>ایجاد</Button>
      </Grid>
    </Grid>
  );
};
