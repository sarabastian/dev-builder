import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import Search from '../../containers/Search';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));



export default function MainNavBar(props) {
  // console.log(props.projects_supported)
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();




  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {

    history.push({
      pathname: "/logout"})
  }



  return (
    <div className={classes.root}>

      <AppBar position="static">
        <Toolbar>


          {auth && (
            <div>
              <Avatar alt="Remy Sharp" src={props.user.profile_pic}

                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              />

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                   <Link to={{
                  pathname:'/my-projects',
                  state: {
                    user: props.user
                  }
                }}style={{ textDecoration: 'none', color: 'black' }}>
                <MenuItem >My Campaigns</MenuItem>
                </Link>
                <Link to={{
                  pathname:'/supporting-projects',
                  state: {
                    user: props.user
                  }
                }}style={{ textDecoration: 'none', color: 'black' }}>
                  <MenuItem>Saved Campaigns</MenuItem>
                </Link>
              
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            
              </Menu>
            </div>
          )}
          <Typography variant="h6" className={classes.title}>
  
          </Typography>
          <div>
            <Search user={props.user}/>
          </div>


        </Toolbar>
      </AppBar>
    </div>
  );
}