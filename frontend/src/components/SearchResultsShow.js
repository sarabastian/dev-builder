import React, { useEffect } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useLocation } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import SupportingProjectTab from './Tabs/SupportingProjectTab';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import SearchResultsNav from './Navbars/SearchResultsNav'
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import Box from '@material-ui/core/Box';
import CodeIcon from '@material-ui/icons/Code';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { green } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: 350
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 24,
  },
  pos: {
    marginBottom: 12,
  },

});

const useButtonStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const useOwnerStyles = makeStyles((theme) => ({
  root: {
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

export default function SearchResultsShow() {
  const data = useLocation()
  console.log(data)
  const classes = useStyles();
  const buttonClasses = useButtonStyles();
  const ownerClasses = useOwnerStyles();

  const theme = useTheme();
  const project = data.state.project
  console.log(data.state.projectOwner)
  const projectOwner = data.state.projectOwner
  const user = data.state.user
  const [supporterships, setSupporterships] = React.useState([]);
  console.log(user.projects_supported)
  // console.log(user.projects_supported.map(p => p.id === project.id) ? 'hi' : 'no')
  console.log(project)
  // const supportBtn = supporterships.filter(s => s.project_id != project.id)
  const alreadySupportingBtn = supporterships.filter(s => s.project_id === project.id && s.user_id === user.id)
  console.log(alreadySupportingBtn)

  useEffect(() => {
  fetch('http://localhost:3001/api/v1/supporterships/')
  .then(res => res.json())
  .then(supporterships => setSupporterships(supporterships));
  }, [])
console.log(supporterships)
// console.log(supporterships.map(s => s.user_id == user.id ? 'hi' : null))

  const createSupportership = () => {
    fetch('http://localhost:3001/api/v1/supporterships',
      {
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
      setSupporterships([...supporterships, result]))
  }

  return (
    <div>
      <SearchResultsNav project={data.state.project} user={data.state.user} language={data.state.project.language} />
      <div>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {project.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {project.story}
              </Typography>
            
        
              {alreadySupportingBtn.length > 0 ?
  
 
 <Button
         variant="contained"
         color="secondary"
         className={classes.button}
         >Supporting</Button>  : 

<Button onClick={createSupportership}
        variant="contained"
        color="secondary" 
        className={classes.button}
        startIcon={<AddIcon />}
      >
        Support
      </Button> }
            </CardContent>

            <Grid mx="auto"  p={2}
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
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={projectOwner.name}
        // caption={projectOwner.username}
        subheader={projectOwner.username}
      />
    
      <CardContent>
      <Typography variant="body1" color="textSecondary" component="p">
      </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {projectOwner.bio}        </Typography>
      </CardContent>
      

    </Card>



    </Grid>
          </div>
          <CardMedia
            className={classes.cover}
            image={project.image}
          />
        </Card>
        <AppBar position="static" color='white'>
  <Toolbar variant="dense">
   

  <Link href={data.state.project.github}  variant="body2">
  <Card  style={{ border: "none", boxShadow: "none" }}className={ownerClasses.root}>
  <CardHeader 
  avatar={ <GitHubIcon color='secondary' /> }
   />
   </Card>
                </Link>
  <Card  style={{ border: "none", boxShadow: "none" }}className={ownerClasses.root}>
  <CardHeader 
  avatar={ <LocationOnIcon color='primary' /> }
  title={project.user.location}
 />
  
 
</Card> 
{/* <Card  style={{ border: "none", boxShadow: "none" }}className={ownerClasses.root}>
  <CardHeader 
  avatar={ <TimelapseIcon color='secondary' /> }
  title={project.stage}
  subheader='stage' />
  
 
</Card>       */}
    <TimelapseIcon color="secondary"/>
    <Typography variant="sm" color="primary" >
   
   {project.stage} stage
   </Typography>
   <Card  style={{ border: "none", boxShadow: "none" }}className={ownerClasses.root}>
  <CardHeader 
  avatar={ <CalendarTodayIcon color='primary' /> }
  title={project.timeline}
  subheader="days remain" />
  
 
</Card> 
<Card style={{ border: "none", boxShadow: "none" }} className={ownerClasses.root}>
  <CardHeader 
  avatar={ <AttachMoneyIcon className={ownerClasses.avatar}/> }
  title={project.fundraising_goal}
  subheader="goal" />
  

</Card> 
  </Toolbar>
</AppBar>
      </div>

      <div>
                    <SupportingProjectTab project={project} user={user} projectOwner={projectOwner}/>
                    </div> 
    </div>



  )
}
