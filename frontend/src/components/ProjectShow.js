import React, { useEffect } from 'react';
import ProjectShowNav from './Navbars/ProjectShowNav';

import { makeStyles } from '@material-ui/core/styles';
import ProjectTabs from './Tabs/ProjectTabs';
import {useLocation} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from '@material-ui/core';
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



const useStyle = makeStyles({
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


const useAccordionStyles = makeStyles((theme) => ({
  root: {
    width: '400%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const ProjectShow = () =>  {
    const data = useLocation()
    const styles = useStyle();
    const accordionClasses = useAccordionStyles();


    const [open, setOpen] = React.useState(false);
    const [story, setStory] = React.useState(data.state.project.story);
    const [timeline, setTimeline] = React.useState(data.state.project.timeline);
    const [fundraising_goal, setFundraisingGoal] = React.useState(data.state.project.fundraising_goal);
    const [deleted, setDelete] = React.useState(false);
    const [githubChange, setGithubChange] = React.useState(data.state.project.github);
    const [currentProject, setCurrentProject] = React.useState([])
    const [updatedProject, setUpdatedProject] = React.useState([])
    const [changedProject, setClickforChanged] = React.useState(false)
  
    const handleStoryChange = (event) => {
      setClickforChanged(true);
      setStory(event.target.value) ;
    };

    const handleTimelineChange = (event) => {
     
      setTimeline(event.target.value) ;
    };
  
    const handleFundraisingChange = (event) => {
    
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
      fetch(`http://localhost:3001/api/v1/projects/${data.state.project.id}`, {
        method: 'DELETE'
        })
      
    }

   
  // console.log(useLocation())

 
  const handleStoryUpdate = () => {
    fetch(`http://localhost:3001/api/v1/projects/${data.state.project.id}`, {
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
    fetch(`http://localhost:3001/api/v1/projects/${data.state.project.id}`, {
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
  fetch(`http://localhost:3001/api/v1/projects/${data.state.project.id}`, {
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

const handleGithubUpdate = () => {
  fetch(`http://localhost:3001/api/v1/projects/${data.state.project.id}`, {
    method:'PATCH',
    headers:{
      'Content-Type':'application/json',
        Accept: 'application/json',
    },
    body: JSON.stringify({
      github: githubChange
    })
  })
  .then(res => res.json())
  .then(project => setUpdatedProject(project))
  }

useEffect(() => {
  fetch(`http://localhost:3001/api/v1/projects/${data.state.project.id}`)
    .then(res => res.json())
    .then(project => setCurrentProject(project));
}, []);

  
    // console.log(currentProject)

    return (
      deleted ? <Redirect to="/my-projects" /> : 
  <div>
  
   
      <ProjectShowNav user={data.state.user} project={data.state.project}/>

      <div>
      <Card className={styles.root} variant="outlined">
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
          expandIcon={< EditIcon onClick={handleGithubUpdate}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={accordionClasses.heading}>{changedProject ? updatedProject.story : currentProject.story}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form>
        <TextField onChange={e => handleStoryChange(e)}
            autoFocus
            fullWidth
            defaultValue={currentProject.story}
            name='story'
            variant="filled"
    
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
          <Typography className={accordionClasses.heading}> timeline: {changedProject ? updatedProject.timeline : currentProject.timeline} days</Typography>

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
          <Typography className={accordionClasses.heading}>fundraising goal: ${changedProject ? updatedProject.fundraising_goal : currentProject.fundraising_goal}</Typography>

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

                
        <Link href={changedProject ? updatedProject.github : currentProject.github} >
          <GitHubIcon />
          </Link>
        <Accordion>
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
          />
        
    
        <Typography className={accordionClasses.heading}>

          
             
             
                </Typography>
                </AccordionDetails>
              </Accordion>
          

            </CardContent>
      
        </Card>
        </div>
      
  
      <ProjectTabs project={data.state.project} user={data.state.user} posts={data.state.posts}
                  supporters={data.state.supporters} comments={data.state.comments}
                  commenters={data.state.commenters} />
                
                    
                    
               
              </div>      
 
                    
                    
                    

        )
    }


export default ProjectShow;