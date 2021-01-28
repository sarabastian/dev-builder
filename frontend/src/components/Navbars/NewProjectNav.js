import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import { Link, useLocation } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from "react-router-dom";




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


export default function ProjectShowNav(props) {
    const classes = useStyles();
    const badgeClasses = useStyle();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openRequests, setOpenRequests] = React.useState(false)
    const open = Boolean(anchorEl);
    const history = useHistory();



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

    const handleLogout = () => {

        history.push({
          pathname: "/logout"})
      }


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


                </Toolbar>
            </AppBar>
        </div>
    );
}