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
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Search from '../../containers/Search';
import { useHistory } from "react-router-dom";
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

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
    const history = useHistory();



    const data = useLocation()
    // console.log(props)

    return (
        <div className={classes.root}>

            <AppBar position="static">
                <Toolbar>
                 <Link to={{pathname: '/my-projects'}}> <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <ArrowBackIcon color='secondary'/>
                    </IconButton>  </Link>
                    {/* <Typography variant="h6" className={classes.title}>
            My Projects
          </Typography> */}
                    {auth && (
                        <div>

                            {props.project.collaborate_requests.length == 0 ?





                                <Avatar alt="Remy Sharp" src={props.user.profile_pic}

                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                /> :

                                <div className={badgeClasses.root}>
                                    <Badge color="secondary" variant="dot">


                                        <Avatar alt="Remy Sharp" src={props.user.profile_pic}

                                            aria-label="account of current user"
                                            aria-controls="menu-appbar"
                                            aria-haspopup="true"
                                            onClick={handleMenu}
                                            color="inherit"
                                        />

                                    </Badge>
                                </div>
                            }
                        </div>

                    )}
  <div>
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


               
          
                      
                        {props.project.collaborate_requests.length == 0 ? null : <MenuItem onClick={handleRequest}> <IconButton> <PersonAddIcon color='secondary'/> </IconButton></MenuItem> }
                        {openRequests ? <div>       <Dialog
                            open={open2}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">{"Your requests from supporters to collaborate on this project"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">



                                <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={props.project.requesters[0].profile_pic} />
        </ListItemAvatar>
        <ListItemText
          primary={props.project.requesters[0].name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               
              </Typography>
              {props.project.requesters[0].bio}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      {props.project.requesters.length > 1 ? 
      <ListItem alignItems="flex-start">
       <ListItemAvatar>
          <Avatar alt="Travis Howard" src={props.project.requesters[1].profile_pic} />
        </ListItemAvatar> 
        <ListItemText
          primary={props.project.requesters[1].name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                
              </Typography>
              {props.project.requesters[1].bio}
            </React.Fragment>
          }
        />
      </ListItem> : null}
      <Divider variant="inset" component="li" />
      {props.project.requesters.length > 2 ? 
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={props.project.requesters[1].profile_pic} />
        </ListItemAvatar>
        <ListItemText
          primary={props.project.requesters[1].name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              </Typography>
              {props.project.requesters[1].bio}
            </React.Fragment>
          }
        />
      </ListItem> : null }
    </List>




                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose2} color="primary">
                                    Decline
          </Button>
                                <Button onClick={handleClose2} color="primary" autoFocus>
                                    Accept
          </Button>
                            </DialogActions>
                        </Dialog> </div> : null}
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
<Typography variant="h6" className={classes.title}>
            {/* {props.project.title}  */}
          </Typography>
                    <div>
            <Search user={props.user}/>
          </div>
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