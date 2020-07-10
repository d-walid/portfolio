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
import react_node_img_project from "../../images/projects/react-node.jpg";

const ProjectMyIRC = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={8} md={6}>
      <Card className={classes.cardContainer}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Project My IRC"
            height="150"
            image={react_node_img_project}
          />
          <CardContent>
            <Typography gutterBottom variant="h6">
              My IRC
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              First project with Socket.io. The goal was to made an IRC with
              Node/React for some back and front-end.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={(event) =>
              window.open("https://github.com/d-walid/my_irc", "_blank")
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

export default ProjectMyIRC;
