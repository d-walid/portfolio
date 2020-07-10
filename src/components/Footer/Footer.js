import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: "white" }}>
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={
          <LinkedInIcon
            onClick={(event) =>
              window.open(
                "https://www.linkedin.com/in/walid-didoune-29774b162/",
                "_blank"
              )
            }
          />
        }
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={
          <GitHubIcon
            onClick={(event) =>
              window.open("https://github.com/d-walid", "_blank")
            }
          />
        }
      />
    </BottomNavigation>
  );
};

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 200,
    },
    "& .MuiSvgIcon-root": {
      fill: "#013A67",
    },
  },
});

export default Footer;
