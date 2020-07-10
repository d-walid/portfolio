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
import php_img_project from "../../images/projects/php.jpg";

const ProjectPiePHP = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={8} md={6}>
      <Card className={classes.cardContainer}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Project Pie PHP"
            height="150"
            image={php_img_project}
          />
          <CardContent>
            <Typography gutterBottom variant="h6">
              MVC Pie PHP
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              This is a MVC's framework made in PHP. It was a project school
              made during my first year.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={(event) =>
              window.open("https://github.com/d-walid/MVC_PiePHP", "_blank")
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

export default ProjectPiePHP;
