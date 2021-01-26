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
import NewProjectPostCardContainer from '../../containers/NewProjectPostCardContainer';
import NewProjectSupporterCard from '../NewProjectSupporterCard';
import NewProjectCommentCard from '../NewProjectCommentCard'


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




export default function NewProjectTabs(props) {
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
 
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
 
  // const [userCommenter, setUser] = useState([])
  // const getCommenter = (id) => {

  //   fetch(`http://localhost:3001/api/v1/users/${id}`)
  //   .then(r => r.json())
  //   .then( user => setUser(user))
  // }
// let commenters = props.commenters.filter(com => com.id == props.comments.map(c => c.user_id))


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
  
        

      </Tabs>
      <TabPanel value={value} index={0} >

        {/* <IconButton aria-label="add" onClick={handleClickOpen}>
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
      </Dialog> */}

    <NewProjectPostCardContainer project={props.project} key={props.project.id} user={props.user}/>
    
      </TabPanel>
      
    
    
      
         
 


    </div>
    </div>
  );
}