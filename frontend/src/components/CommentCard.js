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

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

export default function CommmentCard(props) {
  const classes = useStyles();
  const [allCommenters, setAllCommenters] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/projects/${props.project.id}`)
      .then(res => res.json())
      .then(project => setAllCommenters(project.commenters));
  }, []);

  let thisCommenter = allCommenters.filter(commenter => commenter.id == props.comment.user_id )

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          {thisCommenter.length == 1 ? <Avatar src={thisCommenter[0].profile_pic}></Avatar> : null }
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography >{props.comment.blurb} 
             <br></br>-{thisCommenter.length == 1 ? thisCommenter[0].name : null}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
     
    </div>
  );
}