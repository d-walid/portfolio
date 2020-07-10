import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import react_img_project from "../../images/projects/react.jpg";

const ProjectPortfolio = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={8} md={6}>
      <Card className={classes.cardContainer}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Project My Portfolio"
            height="150"
            image={react_img_project}
          />
          <CardContent>
            <Typography gutterBottom variant="h6">
              My Portfolio
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              You are actually on this project, welcome to my portfolio :D !
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={(event) =>
              window.open("https://github.com/d-walid/portfolio", "_blank")
            }
          >
            GitHub page
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

const useStyles = makeStyles({
  cardContainer: {
    maxWidth: 400,
    margin: "5rem auto",
  },
});

export default ProjectPortfolio;
