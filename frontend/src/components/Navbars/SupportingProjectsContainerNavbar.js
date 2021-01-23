import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import { Link, useLocation } from "react-router-dom";
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';




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
    extendedIcon: {
        marginRight: theme.spacing(1),
      },
    
}));
const useStyle = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));
const useListStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));


export default function SupportingProjectsContainerNavbar(props) {
    const classes = useStyles();
    const badgeClasses = useStyle();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openRequests, setOpenRequests] = React.useState(false)
    const open = Boolean(anchorEl);
   


    const handleRequest = () => {

        setOpenRequests(true);
        setOpen2(true);
    }
    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [open2, setOpen2] = React.useState(false);



    const handleClose2 = () => {
        setOpen2(false);
    };
    const listClasses = useListStyles();

  


    const data = useLocation()
    // console.log(props)

    return (
        <div className={classes.root}>

            <AppBar position="static">
                <Toolbar>
                 <Link to={{pathname: '/my-projects'}}> <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <ArrowBackIcon color='secondary'/>
                    </IconButton>  </Link>
                
                    {auth && (
                        <div>

        





                                <Avatar alt="Remy Sharp" src={props.user.profile_pic}

                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                /> 
                                </div>

                    )}

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
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                       
  
    




                     
                    </Menu>
                    <Link to={{

pathname: "/create",

state: {
  user: props.user
}
}} style={{ textDecoration: 'none' }}>
<Fab variant="extended" color="secondary" aria-label="add" >
  <AddIcon className={classes.extendedIcon}
   

  />Create

</Fab>
</Link>

                </Toolbar>
            </AppBar>
        </div>
    );
}