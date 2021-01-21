import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
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



export default function PostCard(props) {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
             
          {/* {thisCommenter.length == 1 ? <Avatar src={thisCommenter[0].profile_pic}></Avatar> : null } */}
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography >
            {props.post.blurb}
             {/* <br></br>@{thisCommenter.length == 1 ? thisCommenter[0].username : null} */}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
     
    </div>
  );
}