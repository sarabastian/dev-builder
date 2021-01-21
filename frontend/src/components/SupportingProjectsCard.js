import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions'


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });


const SupportingProjectCard = (props) => {



    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const [fullProject, setFullProject] = React.useState({})


    useEffect(() => {
        fetch(`http://localhost:3001/api/v1/projects/${props.project.id}`)
          .then(res => res.json())
          .then(project => {
              setFullProject(project)
              
          });
      }, []);

      console.log(fullProject)
    return (


        <Card className={classes.root} variant="outlined">
            <CardActionArea>
                <CardMedia
          className={classes.media}
          image={props.project.image}
          title="Project Image"
                />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {props.project.title}

                   
            
                   
                
          </Typography>
                <Typography variant="h5" component="h2">
                   {props.project.story}
          </Typography>
                <Typography className={classes.pos} color="textSecondary">
                   timeline: {props.project.timeline} days remain
          </Typography>
                <Typography variant="body2" component="p">
                    Main Language: {props.project.language}
            <br />
        
                <Link href={props.project.github} >
                    <GitHubIcon />
                </Link>
                </Typography>
            {/* <image src={props.image}></image> */}
            </CardContent>
            </CardActionArea>
            <CardActions>
    

        <Link to={{
            pathname: "/supporting-project",
            state: {
              project: props.project,
              user: props.user, 
              projectOwner: fullProject.user       
            }
            
           }} >
        <Button size="small" color="primary" >
          See More
         
        </Button>
        </Link>
       
      </CardActions>
           


        
        </Card>
       
    )
}

export default SupportingProjectCard;