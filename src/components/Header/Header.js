import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../../images/avatar.png";

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Walid Didoune" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Walid Didoune"]} typeSpeed={70} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Web Developer",
            "Web Designer",
            "Love MERN",
            "Love Mobile Dev",
            "Python fan",
          ]}
          typeSpeed={70}
          backSpeed={50}
          loop
        />
      </Typography>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },

  title: {
    color: "white",
    fontFamily: "Open Sans",
    fontSize: "4rem",
  },

  subtitle: {
    color: "white",
    marginBottom: "4rem",
    fontFamily: "Open Sans",
    fontSize: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

export default Header;
