import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import SearchResultsCard from '../components/SearchResultsCard';
import SearchResultsNav from '../components/Navbars/SearchResultsNav';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import NewProjectPostCard from '../components/NewProjectPostCard'
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export default function NewProjectPostCardContainer(props) {


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

  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return(
      <div>
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

    {allPosts.map(p => <NewProjectPostCard post={p} key={p.id} user={props.user}/>)}
    </div>
  )
}