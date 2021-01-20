import React from 'react';
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
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IconButton } from '@material-ui/core';
import { TextField } from '@material-ui/core';


const ProjectShow = () =>  {
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
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
  });
  const styles = useStyle();

    const [open, setOpen] = React.useState(false);
    const [story, setStory] = React.useState('');
    const [timeline, setTimeline] = React.useState(null);
    const [fundraising_goal, setFundraisingGoal] = React.useState(null);
  
    const handleStoryChange = (event) => {
      
      setStory(event.target.value) ;
    };

    const handleTimelineChange = (event) => {
     
      setTimeline(event.target.value) ;
    };
  
    const handleFundraisingChange = (event) => {
    
      setFundraisingGoal(event.target.value)
    };
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  // console.log(useLocation())
  const data = useLocation()
 

  
    // console.log(data.state)

    return (

  <div>
      <ProjectShowNav user={data.state.user} project={data.state.project}/>

      <Card className={styles.root} variant="outlined">
            <CardContent>
                <Typography className={styles.title} color="textSecondary" gutterBottom>
                    {data.state.project.title}
          </Typography>
                <Typography variant="h5" component="h2">
                   {data.state.project.story}<IconButton onClick={handleClickOpen}><EditIcon/> </IconButton>
                   <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle >Edit your Story</DialogTitle>
        <DialogContent>
       
          <TextField onChange={e => handleStoryChange(e)}
            autoFocus
            margin="dense"
            value={data.state.project.story}
    
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
     
          </Typography>
                <Typography className={styles.pos} color="textSecondary">
                   timeline: {data.state.project.timeline} days <IconButton onClick={handleClickOpen}><EditIcon/></IconButton>
                   <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit your Timeline</DialogTitle>
        <DialogContent>
       
          <TextField
            autoFocus
            margin="dense"
            value={data.state.project.timeline}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
                   
          </Typography>
                <Typography variant="body2" component="p">
                    fundraising goal: ${data.state.project.fundraising_goal} <IconButton onClick={handleClickOpen}><EditIcon/></IconButton>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit your Goal</DialogTitle>
        <DialogContent>
       
          <TextField onChange={e => handleFundraisingChange(e)}
            autoFocus
            margin="dense"
            id="name"
            value={data.state.project.fundraising_goal}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
            <br />
        
                <Link href={data.state.project.github} >
                    <GitHubIcon />
                </Link><IconButton onClick={handleClickOpen}><EditIcon/></IconButton>
                  
                </Typography>
            </CardContent>
      
        </Card>
  
      <ProjectTabs project={data.state.project} user={data.state.user} posts={data.state.posts}
                  supporters={data.state.supporters} comments={data.state.comments}
                  commenters={data.state.commenters} />
      </div>
    


        )
    }


export default ProjectShow;