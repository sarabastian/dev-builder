import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
 
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



export default function LandingPageNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color='primary' position="static" >
        <Toolbar>
    
          <Typography variant="h6" className={classes.title}>
            
          </Typography> 
          <Link to='/login' style={{ textDecoration: 'none' }}> <Button color="inherit" className={classes.menuButton}>Login</Button> </Link>
          <Link to='/signup'  style={{ textDecoration: 'none' }}> <Button color="inherit" className={classes.menuButton}>Signup</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}