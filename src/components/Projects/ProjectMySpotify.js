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
import react_lumen_img_project from "../../images/projects/react-lumen.jpg";

const ProjectMySpotify = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={8} md={6}>
      <Card className={classes.cardContainer}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Project my_spotify"
            height="150"
            image={react_lumen_img_project}
          />
          <CardContent>
            <Typography gutterBottom variant="h6">
              My Spotify
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              First real group project made with three other people. Fun
              project. The goal was to recreate a music library.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={(event) =>
              window.open("https://github.com/d-walid/rush_spotify", "_blank")
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

export default ProjectMySpotify;
