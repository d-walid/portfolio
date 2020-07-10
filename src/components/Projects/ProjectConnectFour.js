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
import js_jquery_img_project from "../../images/projects/js-jquery.jpg";

const Project_Connect_Four = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={8} md={6}>
      <Card className={classes.cardContainer}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Project connect four"
            height="150"
            image={js_jquery_img_project}
          />
          <CardContent>
            <Typography gutterBottom variant="h6">
              Connect Four
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              This is a version of Connect Four. It was during my first year at
              Epitech.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={(event) =>
              window.open("https://github.com/d-walid/Connect-Four", "_blank")
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

export default Project_Connect_Four;
