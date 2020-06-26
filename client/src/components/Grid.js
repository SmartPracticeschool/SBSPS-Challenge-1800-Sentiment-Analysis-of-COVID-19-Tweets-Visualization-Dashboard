import React from "react";
import { Grid, Paper, Card, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../daata/img1.jpg";
import Image2 from "../daata/img2.jpg";
import List from "./List";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: "10px",
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function GridBar() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid className={classes.root} item xs={6}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <img src={Image2} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <List />
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <img src={Image} />
        </Paper>
      </Grid>
    </Grid>
  );
}
