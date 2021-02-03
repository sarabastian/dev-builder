import React, { useEffect } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useLocation } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import SupportingProjectTab from './Tabs/SupportingProjectTab';
import SupportingProjectShowNavbar from './Navbars/SupportingProjectShowNavbar';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import CodeIcon from '@material-ui/icons/Code';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const useChipStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,

  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));


const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: 450,


  },
  details: {
    display: 'center',
    // flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 800,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },

  pos: {
    marginBottom: 12,
  },

});

const useOwnerStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
    maxWidth: 345,

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    color: green[500],
  },


}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SupportingProjectShow() {
  const data = useLocation()
  const classes = useStyles();
  const ownerClasses = useOwnerStyles();
  const theme = useTheme();
  const project = data.state.project
  // console.log(data.state.projectOwner)
  const projectOwner = data.state.projectOwner
  const user = data.state.user

  const chipClasses = useChipStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    fetch('http://localhost:3001/api/v1/collaborate_requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',

      },
      body: JSON.stringify({
        project_id: project.id,
        user_id: user.id
      }),
    })
    .then(r => r.json())
    .then(result =>
    console.log(result)


    )
    setOpen(false);
  };

  const handleClose2 = () => {
    setOpen(false);
  };

  return (
    <div>
      <SupportingProjectShowNavbar user={user} />

      <Grid>

        <Card elevation={3} className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {project.title}

              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {project.story}
              </Typography>

              <Grid mx="auto" p={2}
                container
                direction="row"
                justify="space-evenly"
                alignItems="center">
                {/* <Box mx="auto"  p={2}> */}
                <Card className={ownerClasses.root}  >
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={ownerClasses.avatar} src={projectOwner.profile_pic}>

                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="send a request to collaborate on this project" onClick={handleClickOpen}>
                        <PersonAddIcon />
                      </IconButton>

                    }

                    title='About the Developer'
                    // caption={projectOwner.username}
                    subheader={projectOwner.name}

                  />
                  <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                  >
                    <DialogTitle id="alert-dialog-slide-title">Send {projectOwner.name} a request to collaborate on {project.title}?</DialogTitle>
               
                    <DialogActions>
                      <Button onClick={handleClose2} color="primary">
                        Disagree
          </Button>
                      <Button onClick={handleClose} color="primary">
                        Agree
          </Button>
                    </DialogActions>
                  </Dialog>
                  <CardContent>
                    <Typography variant="body1" color="textSecondary" component="p">
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {projectOwner.bio}        </Typography>
                  </CardContent>
                  <CardActions disableSpacing>

                  </CardActions>


                </Card>


              </Grid>

            </CardContent>

          </div>
          <CardMedia
            className={classes.cover}
            image={project.image}

          />
          {/* <Typography variant="subtitle2" color="textSecondary"> */}

          {/* </Typography> */}








        </Card>

      </Grid>

      <Paper style={{ border: "none", boxShadow: "none" }} variant="dense" component="ul" className={chipClasses.root}>
        <Link href={data.state.project.github} variant="body2">
          <Card style={{ border: "none", boxShadow: "none" }} className={ownerClasses.root}>
            <CardHeader
              avatar={<GitHubIcon color='secondary' />} />
          </Card>
        </Link>
        <Card style={{ border: "none", boxShadow: "none" }} className={ownerClasses.root}>
          <CardHeader
            avatar={<LocationOnIcon color='primary' />}
            title={projectOwner.location}
          />


        </Card>

        <Card style={{ border: "none", boxShadow: "none" }} className={ownerClasses.root}>
          <CardHeader
            avatar={<TimelapseIcon color='primary' />}
            title={project.stage}
            subheader='stage'
          />


        </Card>

        <Card style={{ border: "none", boxShadow: "none" }} className={ownerClasses.root}>
          <CardHeader
            avatar={<AttachMoneyIcon className={ownerClasses.avatar} />}
            title={project.fundraising_goal}
            subheader="goal" />


        </Card>

        <Card style={{ border: "none", boxShadow: "none" }} className={ownerClasses.root}>
          <CardHeader
            avatar={<CalendarTodayIcon color='primary' />}
            title={project.timeline}
            subheader="days remain" />


        </Card>

        <Card style={{ border: "none", boxShadow: "none" }} className={ownerClasses.root}>
          <CardHeader
            avatar={<CodeIcon color='primary' />}
            title={project.language}
          />


        </Card>



      </Paper>

      {/* <AppBar position="static" color='white'>
  <Toolbar variant="dense">
   

  <Link href={data.state.project.github}  variant="body2">
        <GitHubIcon color='secondary'/>   
                </Link>
               
                <LocationOnIcon color='primary'></LocationOnIcon>
    <Typography variant="sm" color="primary" >
   
    {projectOwner.location}
    </Typography>
    <TimelapseIcon color="secondary"/>
    <Typography variant="sm" color="primary" >
   
   {project.stage} stage
   </Typography>
  </Toolbar>
</AppBar>  */}
      <SupportingProjectTab project={project} user={user} projectOwner={projectOwner} />
    </div>




  )
}
