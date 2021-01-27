import React, { useEffect } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import {useLocation} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
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
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import Grid from '@material-ui/core/Grid';

const useChipStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));


const useStyles = makeStyles({
    root: {
        display: 'flex',
        height: 250
       
    },
    details: {
      display: 'center',
      // flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 450,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
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

    const chipClasses = useChipStyles();
   

    return (
      <div>
         <SupportingProjectsContainerNavbar user={user} />

<Grid>

      <Card elevation={3} className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {project.title} 
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
{project.story}          
</Typography>
  
<Chip variant="outlined" avatar={<Avatar src={projectOwner.profile_pic} />} 
label={projectOwner.name} label={projectOwner.username}/>



</CardContent>

</div>
<CardMedia
        className={classes.cover}
        image={project.image}
     
      />
{/* <Typography variant="subtitle2" color="textSecondary"> */}

{/* </Typography> */}


   

     
   


    </Card>
    </Grid>
    <Paper variant="dense" component="ul" className={chipClasses.root}>
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
   
            <Chip
              // icon={icon}
              label={project.language}
             
              className={classes.chip}
            />
             <Chip
              // icon={icon}
              label={project.stage}
             
              className={classes.chip}
            />
          
    </Paper>
       
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
                    <SupportingProjectTab project={project} user={user} projectOwner={projectOwner}/>
                    </div>
  
             
                    

        )
                }
    