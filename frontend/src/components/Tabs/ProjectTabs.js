import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { SnackbarContent } from '@material-ui/core';
import SupporterCard from '../SupporterCard';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const useSnackStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const useCommentStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

export default function NewProjectTabs(props) {
  
  const [open, setOpen] = React.useState(false);
  const token = localStorage.getItem('token');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const snackClasses = useSnackStyles();
  const commentClasses = useCommentStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [post, setPost] = useState('');
  // console.log(props.user)
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/projects/${props.project.id}`)
      .then(res => res.json())
      .then(project => setAllPosts(project.posts));
  }, []);
// console.log(props.project.id)
  const addPost = () => {
    setOpen(false);
    fetch(`http://localhost:3001/api/v1/posts`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',

      },
      body: JSON.stringify({
        project_id: props.project.id,
        user_id: props.user.id,
        blurb: post
      }),
  })


  .then(r => r.json())
  .then(post => setAllPosts([...allPosts, post]));

  }
let commenters = props.commenters.filter(com => com.id == props.comments.map(c => c.user_id))
// console.log(commenters[0].name)

  return (
      <div>
          <h2>Community</h2>
     

    <div className={classes.root}>
       
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Your Updates" {...a11yProps(0)} ></Tab>
        <Tab label="Comments" {...a11yProps(1)} />
        <Tab label="Supporters" {...a11yProps(2)} />
        

      </Tabs>
      <TabPanel value={value} index={0} >
        <IconButton aria-label="add" onClick={handleClickOpen}>
            <AddIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add an update about your project</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Keep your community informed of your progress.
          </DialogContentText>
          <TextField  onChange={e => setPost(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="update"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addPost} color="primary">
            Post
          </Button>
        </DialogActions>
      </Dialog>
      <div className={snackClasses.root}>
       {allPosts.map(p => <SnackbarContent message={p.blurb}  />)}
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className={commentClasses.root}>
      {props.comments.map(c =>  <Paper className={commentClasses.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar src={commenters[0].profile_pic}></Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{c.blurb} <br></br><br></br>- {commenters[0].name}</Typography>
          </Grid>
        </Grid>
      </Paper>
      )}

      </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
    
      {props.supporters.map(s =>  <SupporterCard supporter={s} key={s.id}  />)}
   
        
      </TabPanel>


    </div>
    </div>
  );
}