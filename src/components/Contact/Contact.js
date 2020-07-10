import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Box } from "@material-ui/core";
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="div">
        <Grid container justify="center">
          <Box component="form" className={classes.form}>
            <Typography variant="h5" className={classes.heading}>
              Need to contact me?
              <br />
              Feel free to send an email : walid.didoune@epitech.eu :)
            </Typography>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },

  heading: {
    textAlign: "center",
    color: "#eae1b6",
    marginBottom: "1rem",
    fontFamily: "Open Sans",
  },

  linkResume: {
    textDecoration: "none",
    color: "red",
  },
}));

export default Contact;
