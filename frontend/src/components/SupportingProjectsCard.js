import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IconButton } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
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

    const [deleted, setDelete] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleDelete = () => {
        setDelete(true);
        fetch(`http://localhost:3001/api/v1//${props.id}`, {
          method: 'DELETE'
          })
        
      }

    //   console.log(props.project.title)
  
      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (

        deleted ? <Redirect to="/my-projects" /> : 
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
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.title}
                    <IconButton  onClick={handleClickOpen}><DeleteOutlinedIcon  color="secondary"/>
                   
                
                      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Are you sure you want to delete this project?'}</DialogTitle>
     
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick ={handleDelete} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
                   
            
                   
                    </IconButton>
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
                {props.title}
            {/* <image src={props.image}></image> */}
            </CardContent>
            <CardActions>
    

        <Link to={{
            pathname: "/supporting-project",
            // state: {
            //   project: this.state.project,
            //   key: this.state.project.id,
            //   user: this.props.user,
            //   posts: this.state.project.posts,
            //   comments: this.state.project.comments,
            //   commenters: this.state.project.commenters,
            //   supporters: this.state.project.supporters,
            //   requesters: this.state.project.requesters
    
            // }
            
           }} >
        <Button size="small" color="primary">
          See More
         
        </Button>
        </Link>
       
      </CardActions>
            </CardActionArea>


        
        </Card>
       
    )
}

export default SupportingProjectCard;