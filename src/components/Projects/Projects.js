import React from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../Navbar/Navbar";
import ProjectConnectFour from "./ProjectConnectFour";
import ProjectMySpotify from "./ProjectMySpotify";
import ProjectPiePHP from "./ProjectPiePHP";
import ProjectMyIRC from "./ProjectMyIRC";
import ProjectPortfolio from "./ProjectPortfolio";

const Projects = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* Project 1 */}
        <ProjectConnectFour />
        {/* Project 2 */}
        <ProjectMySpotify />
        {/* Project 3 */}
        <ProjectPiePHP />
        {/* Project 4 */}
        <ProjectMyIRC />
        {/* Project 5 */}
        <ProjectPortfolio />
      </Grid>
    </Box>
  );
};

const useStyles = makeStyles({
  mainContainer: {
    height: "100%",
  },
});

export default Projects;
