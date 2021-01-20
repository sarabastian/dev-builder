import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useLocation} from "react-router-dom";
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IconButton } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


function NewProjectCard(props) {

    const [deleted, setDelete] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleDelete = () => {
        setDelete(true);
        fetch(`http://localhost:3001/api/v1/projects/${props.id}`, {
          method: 'DELETE'
          })
        
      }

      console.log(props)
  
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
            <CardContent>
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
                   {props.story}
          </Typography>
                <Typography className={classes.pos} color="textSecondary">
                   timeline: {props.timeline} days
          </Typography>
                <Typography variant="body2" component="p">
                    fundraising goal: ${props.fundraising_goal}
            <br />
        
                <Link href={props.github} >
                    <GitHubIcon />
                </Link>
                </Typography>
            {/* <image src={props.image}></image> */}
            </CardContent>
        
        </Card>
       
    )
}

export default NewProjectCard