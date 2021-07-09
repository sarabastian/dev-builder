import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  subtitle1: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 14,
  },
});

const SearchResultsCard = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [fullProject, setFullProject] = React.useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/projects/${props.project.id}`)
      .then((res) => res.json())
      .then((project) => {
        setFullProject(project);
      });
  }, []);

  //   console.log(fullProject)
  return (
    <div>
      <Box mx="auto" p={3}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.project.image}
              title="Project Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <strong>{props.project.title}</strong>
              </Typography>
              <Typography className={classes.subtitle1} component="h2">
                {props.project.story}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                timeline: {props.project.timeline} days remain
              </Typography>
              <Typography variant="body2" component="p">
                Main Language: {props.project.language}
                <br />
              </Typography>
              <Typography color="textSecondary" className={classes.subtitle}>
                by: @{props.project.user.username}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link
              to={{
                pathname: "/search-results",
                state: {
                  project: props.project,
                  user: props.user,
                  projectOwner: fullProject.user,
                },
              }}
              style={{ textDecoration: "none" }}
            >
              <Button size="small" color="primary">
                See More
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
};

export default SearchResultsCard;
