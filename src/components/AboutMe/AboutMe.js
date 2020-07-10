import React from "react";
import { Box, Grid } from "@material-ui/core";
import Navbar from "../Navbar/Navbar";
import Presentation from "./Presentation";
import Resume from "./Resume";
import Hobbies from "./Hobbies";
import "./AboutMe.css";

const Aboutme = () => {
  return (
    <Box component="div">
      <Navbar />
      <Grid container className="AboutMe">
        <Presentation />
        <Resume />
        <Hobbies />
      </Grid>
    </Box>
  );
};

export default Aboutme;
