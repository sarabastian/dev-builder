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



export default function SupportingProjectCommentCard(props){
    const classes = useStyles();
    const [allCommenters, setAllCommenters] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/api/v1/projects/${props.project.id}`)
          .then(res => res.json())
          .then(project => setAllCommenters(project.commenters));
      }, []);
    
      
      let thisCommenter = allCommenters.filter(commenter => commenter.id == props.comment.user_id )
      const avatar = (i) => {
      for (i=0; i< thisCommenter.length; i++) {
          return thisCommenter[i].profile_pic }
      }

      const username = (i) => {
        for (i=0; i< thisCommenter.length; i++) {
            return thisCommenter[i].username }
      }


    
// console.log(thisCommenter)
return(



<Paper className={classes.paper}>
<Grid container wrap="nowrap" spacing={2}>
  <Grid item>
  <Avatar src={avatar()}></Avatar> 

  </Grid>
  <Grid item xs zeroMinWidth>
    <Typography >
    {props.comment.blurb}
     <br></br>@{username()}
    </Typography>
  </Grid>
</Grid>
</Paper>
)

}