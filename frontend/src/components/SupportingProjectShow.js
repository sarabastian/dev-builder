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
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import Box from '@material-ui/core/Box';
import CodeIcon from '@material-ui/icons/Code';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { green } from '@material-ui/core/colors';

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
        height: 400, 

       
    },
    details: {
      display: 'center',
      // flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 650,
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

  const useOwnerStyles = makeStyles((theme) => ({
    root: {
      marginTop: 50,
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
     color: green[500],
    },
  

  }));
export default function SupportingProjectShow()  {
    const data = useLocation()
    const classes = useStyles();
    const ownerClasses = useOwnerStyles();
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
            <Link href={data.state.project.github}  variant="body2">
        <GitHubIcon color='secondary'/>   
                </Link>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
{project.story}          
</Typography>

  



<Grid mx="auto"  p={2}
container
direction="row"
justify="space-evenly"
alignItems="center">
  {/* <Box mx="auto"  p={2}> */}
    <Card className={ownerClasses.root}  >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={ownerClasses.avatar} src={projectOwner.profile_pic}>
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title='About the Developer'
        // caption={projectOwner.username}
        subheader={projectOwner.name}

      />
    
      <CardContent>
      <Typography variant="body1" color="textSecondary" component="p">
      </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {projectOwner.bio}        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
 

    </Card>


    </Grid>
   
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
    <Card style={{ border: "none", boxShadow: "none" }} className={ownerClasses.root}>
  <CardHeader 
  avatar={ <LocationOnIcon color='primary' /> }
  title={projectOwner.location}
 />
  
 
</Card> 

<Card style={{ border: "none", boxShadow: "none" }} className={ownerClasses.root}>
  <CardHeader 
  avatar={ <TimelapseIcon color='primary' /> }
  title={project.stage}
  subheader='stage'
 />
  
 
</Card> 
  
  <Card style={{ border: "none", boxShadow: "none" }} className={ownerClasses.root}>
  <CardHeader 
  avatar={ <AttachMoneyIcon className={ownerClasses.avatar}/> }
  title={project.fundraising_goal}
  subheader="goal" />
  
 
</Card> 

<Card style={{ border: "none", boxShadow: "none" }} className={ownerClasses.root}>
  <CardHeader 
  avatar={ <CalendarTodayIcon color='primary' /> }
  title={project.timeline}
  subheader="days remain" />
  
 
</Card> 

<Card style={{ border: "none", boxShadow: "none" }} className={ownerClasses.root}>
  <CardHeader 
  avatar={ <CodeIcon color='primary' /> }
  title={project.language}
   />
  
 
</Card> 


          
    </Paper>
       
    {/* <AppBar position="static" color='white'>
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
</AppBar>  */}
                    <SupportingProjectTab project={project} user={user} projectOwner={projectOwner}/>
                    </div>
  
             
                    

        )
                }
    