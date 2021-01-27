import React, { useEffect } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import {useLocation} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import SupportingProjectTab from './Tabs/SupportingProjectTab';
import SupportingProjectsContainerNavbar from './Navbars/SupportingProjectsContainerNavbar'
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TimelapseIcon from '@material-ui/icons/Timelapse';



const useStyles = makeStyles({
    root: {
        minWidth: 275,
        height: 400
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 24,
    },
    pos: {
        marginBottom: 12,
    },
 
  });


export default function SupportingProjectShow()  {
    const data = useLocation()
    const classes = useStyles();
    const theme = useTheme();
    const project = data.state.project
    // console.log(data.state.projectOwner)
    const projectOwner = data.state.projectOwner
    const user = data.state.user

    return (
     <div>
         <SupportingProjectsContainerNavbar user={user} />
<div>
      <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {project.title} 
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
{project.story}          
</Typography>
<Typography variant="subtitle2" color="textSecondary">
by {projectOwner.name} / @{projectOwner.username}      
</Typography>
        </CardContent>

     
      </div>
      <CardMedia
        className={classes.cover}
        image={project.image}
      />
              <AppBar position="static" color='white'>
  <Toolbar variant="dense">
   

  <Link href={data.state.project.github}  variant="body2">
        <GitHubIcon color='secondary'/>   
                </Link>
               
                <LocationOnIcon color='primary'></LocationOnIcon>
    <Typography variant="sm" color="primary" >
   
    {projectOwner.location}
    </Typography>
    <TimelapseIcon color="secondary"/>
    <Typography variant="sm" color="primary" >
   
   {project.stage} stage
   </Typography>
  </Toolbar>
</AppBar>
    </Card>
    </div>
 
                    <div>
                    <SupportingProjectTab project={project} user={user} projectOwner={projectOwner}/>
                    </div>
                    </div>
             
                    

        )
                }
    