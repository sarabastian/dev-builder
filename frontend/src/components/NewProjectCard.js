import React, { useEffect } from 'react';
import ProjectShowNav from './Navbars/ProjectShowNav';

import { makeStyles } from '@material-ui/core/styles';
import ProjectTabs from './Tabs/ProjectTabs';
import {useLocation} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IconButton } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { Redirect } from 'react-router-dom';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import NewProjectTabs from './Tabs/NewProjectTabs'
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Box from '@material-ui/core/Box';
import CodeIcon from '@material-ui/icons/Code';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { green } from '@material-ui/core/colors';
import CardMedia from '@material-ui/core/CardMedia';

const useStyle = makeStyles({
  root: {
     
      height: 150
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

const useAccordionStyles = makeStyles((theme) => ({
  root: {
    width: '400%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
const useChipStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
 
    // height: 120
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));


function NewProjectCard(props) {
  const data = useLocation()
  const styles = useStyle();
  const accordionClasses = useAccordionStyles();
  const ownerClasses = useOwnerStyles();
  const chipClasses = useChipStyles();


  const [open, setOpen] = React.useState(false);
  const [story, setStory] = React.useState(data.state.project.story);
  const [timeline, setTimeline] = React.useState(data.state.project.timeline);
  const [fundraising_goal, setFundraisingGoal] = React.useState(data.state.project.fundraising_goal);
  const [deleted, setDelete] = React.useState(false);
  const [githubChange, setGithubChange] = React.useState(data.state.project.github);
  const [currentProject, setCurrentProject] = React.useState([])
  const [updatedProject, setUpdatedProject] = React.useState([])
  const [changedStory, setClickforChangedStory] = React.useState(false)
  const [changedTimeline, setClickforChangedTimeline] = React.useState(false)
  const [changedFundraising, setClickforChangedFundraising] = React.useState(false)

  const handleStoryChange = (event) => {
    setClickforChangedStory(true);
    setStory(event.target.value) ;
  };

  const handleTimelineChange = (event) => {
    setClickforChangedTimeline(true);
    setTimeline(event.target.value) ;
  };

  const handleFundraisingChange = (event) => {
    setClickforChangedFundraising(true);
    setFundraisingGoal(event.target.value)
  };

  const handleGithubChange = (event) => {
    setGithubChange(event.target.value)
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  


  const handleDelete = () => {
    setDelete(true);
    fetch(`http://localhost:3001/api/v1/projects/${props.project.id}`, {
      method: 'DELETE'
      })
    
  }

 
// console.log(useLocation())


const handleStoryUpdate = () => {
  fetch(`http://localhost:3001/api/v1/projects/${props.project.id}`, {
    method:'PATCH',
    headers:{
      'Content-Type':'application/json',
        Accept: 'application/json',
    },
    body: JSON.stringify({
      story: story
    })
  })
  .then(res => res.json())
  .then(project => setUpdatedProject(project))
}

const handleTimelineUpdate = () => {
  fetch(`http://localhost:3001/api/v1/projects/${props.project.id}`, {
    method:'PATCH',
    headers:{
      'Content-Type':'application/json',
        Accept: 'application/json',
    },
    body: JSON.stringify({
       timeline: timeline
    })
  })
.then(res => res.json())
.then(project => setUpdatedProject(project))
} 

const handleFundraisingUpdate = () => {
fetch(`http://localhost:3001/api/v1/projects/${props.project.id}`, {
  method:'PATCH',
  headers:{
    'Content-Type':'application/json',
      Accept: 'application/json',
  },
  body: JSON.stringify({
    fundraising_goal: fundraising_goal
  })
})
.then(res => res.json())
.then(project => setUpdatedProject(project))
}

// const handleGithubUpdate = () => {
//   fetch(`http://localhost:3001/api/v1/projects/${data.state.project.id}`, {
//     method:'PATCH',
//     headers:{
//       'Content-Type':'application/json',
//         Accept: 'application/json',
//     },
//     body: JSON.stringify({
//       github: githubChange
//     })
//   })
//   .then(res => res.json())
//   .then(project => setUpdatedProject(project))
//   }

useEffect(() => {
fetch(`http://localhost:3001/api/v1/projects/${props.project.id}`)
  .then(res => res.json())
  .then(project => setCurrentProject(project));
}, []);

console.log(currentProject)
  // console.log(currentProject)

  return (
    deleted ? <Redirect to="/my-projects" /> : 
    <div>
      <Grid>

    <Card style={{ border: "none", boxShadow: "none" }}  className={styles.root} >
    <div className={styles.details}>
          <CardContent>
              <Typography className={styles.title} color="textSecondary" gutterBottom>
                  {currentProject.title}
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
      
        
     
               
                 <IconButton onClick={handleStoryUpdate} >   
                 <div className={accordionClasses.root}>         
    <Accordion>
  
      <AccordionSummary
        expandIcon={< EditIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={accordionClasses.heading}>{changedStory ? updatedProject.story : currentProject.story}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <form>
      <TextField onChange={e => handleStoryChange(e)}
          autoFocus
          fullWidth
          defaultValue={currentProject.story}
          name='story'
  
          fullWidth
        />
        </form>
      </AccordionDetails>
    </Accordion>
    </div>
    </IconButton>
       
          
                 <IconButton onClick={handleTimelineUpdate}>
                 <div className={accordionClasses.root}>         
    <Accordion>
  
      <AccordionSummary
        expandIcon={< EditIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        minWidth
      >
        <Typography className={accordionClasses.heading}> timeline: {changedTimeline ? updatedProject.timeline : currentProject.timeline} days</Typography>

        </AccordionSummary>
        <AccordionDetails>
        <TextField onChange={e => handleTimelineChange(e)}
          autoFocus
          margin="dense"
          name='timeline'
          defaultValue={currentProject.timeline}
          fullWidth
        />
      
   
      </AccordionDetails>
        </Accordion>
        </div>        
      </IconButton>

      <IconButton onClick={handleFundraisingUpdate}>
                 <div className={accordionClasses.root}>         
    <Accordion>
  
      <AccordionSummary
        expandIcon={< EditIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={accordionClasses.heading}>fundraising goal: ${changedFundraising ? updatedProject.fundraising_goal : currentProject.fundraising_goal}</Typography>

        </AccordionSummary>
        <AccordionDetails>
        <TextField onChange={e => handleFundraisingChange(e)}
          autoFocus
          margin="dense"
          id="name"
          defaultValue={currentProject.fundraising_goal}
          name='fundraising_goal'
          fullWidth
        />
      
   
      </AccordionDetails>
        </Accordion>
        </div>        
      </IconButton>

              
      {/* <Link href={changedProject ? updatedProject.github : currentProject.github} >
        <GitHubIcon />
        </Link> */}
      {/* <Accordion>
      <AccordionSummary
        expandIcon={< EditIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        size='xs'
      />
       <AccordionDetails>
        <TextField onChange={e => handleGithubChange(e)}
          autoFocus
          margin="dense"
          id="name"
          defaultValue={currentProject.github}
          name='github'
          fullWidth
        /> */}
      
  
      {/* <Typography className={accordionClasses.heading}>

        
           
           
              </Typography>
              </AccordionDetails>
            </Accordion>
         */}

          </CardContent>
    </div>
    <CardMedia
        className={styles.cover}
        image={props.project.image}
     
      />
      </Card>
      </Grid>

      <Paper style={{ border: "none", boxShadow: "none" }}variant="dense" component="ul" className={chipClasses.root}>
    
    <Card style={{ border: "none", boxShadow: "none" }} className={ownerClasses.root}>
  <CardHeader 
  avatar={ <LocationOnIcon color='primary' /> }
  title={props.user.location}
 />
  
 
</Card> 

<Card style={{ border: "none", boxShadow: "none" }} className={ownerClasses.root}>
  <CardHeader 
  avatar={ <TimelapseIcon color='primary' /> }
  title={props.project.stage}
  subheader='stage'
 />
  
 
</Card> 
  
  <Card style={{ border: "none", boxShadow: "none" }} className={ownerClasses.root}>
  <CardHeader 
  avatar={ <AttachMoneyIcon className={ownerClasses.avatar}/> }
  title={props.project.fundraising_goal}
  subheader="goal" />
  
 
</Card> 

<Card style={{ border: "none", boxShadow: "none" }} className={ownerClasses.root}>
  <CardHeader 
  avatar={ <CalendarTodayIcon color='primary' /> }
  title={props.project.timeline}
  subheader="days remain" />
  
 
</Card> 

<Card style={{ border: "none", boxShadow: "none" }} className={ownerClasses.root}>
  <CardHeader 
  avatar={ <CodeIcon color='primary' /> }
  title={props.project.language}
   />
  
 
</Card> 


          
    </Paper> 

    {/* <AppBar position="center" color='white'>
  <Toolbar variant="dense">
   
  <Link href={data.state.project.github}  variant="body2">
  <Card  style={{ border: "none", boxShadow: "none" }}>
  <CardHeader 
  avatar={ <GitHubIcon color='secondary' /> }
   />
   </Card>
                </Link>

                {/* <Card style={{ border: "none", boxShadow: "none" }} className={ownerClasses.root}>
  <CardHeader 
  avatar={ <LocationOnIcon color='primary' /> }
  title={props.user.location}
 />
  
 
</Card>  */}
               
                {/* <LocationOnIcon color='primary'></LocationOnIcon>
    <Typography variant="sm" color="primary" >
   
    {props.user.location}
    </Typography>
    <Card style={{ border: "none", boxShadow: "none" }} className={ownerClasses.root}>
  <CardHeader 
  avatar={ <TimelapseIcon color='primary' /> }
  title={props.project.stage}
  subheader='stage'
 />
  
 
</Card> 
    <TimelapseIcon color="secondary"/>
    <Typography variant="sm" color="primary" >
   
   {currentProject.stage} stage
   </Typography>
  </Toolbar>
</AppBar>  */}
     
      <NewProjectTabs project={currentProject} user={props.user}  
                      supporters={props.project.supporters} comments={props.project.comments}
                      commenters={props.project.commenters}/>
      </div>
       
    )
}

export default NewProjectCard