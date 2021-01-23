import React, { useEffect } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import {useLocation} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import SupportingProjectTab from './Tabs/SupportingProjectTab';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import SupportingProjectShowNavbar from './Navbars/SupportingProjectShowNavbar'




const useStyles = makeStyles({
    root: {
        minWidth: 275,
        height: 400
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


export default function SearchResultsShow()  {
    const data = useLocation()
    console.log(data)
    const classes = useStyles();
    const buttonClasses = useButtonStyles();

    const theme = useTheme();
    const project = data.state.project
    console.log(data.state.projectOwner)
    const projectOwner = data.state.projectOwner
    const user = data.state.user
    // console.log(

    return (
     <div>
 <SupportingProjectShowNavbar user={user} /> 
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
<Typography variant="subtitle2" color="textSecondary">
by {projectOwner.name} / @{projectOwner.username}      
</Typography>

{project.supporters.forEach(s => s.id != user.id) ? 
<Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<AddIcon />}
      >
        Support
      </Button> : <Button
         variant="contained"
         color="secondary"
         className={classes.button}
         startIcon={<AddIcon />}
         >Already Supporting</Button>}
        </CardContent>

     
      </div>
      <CardMedia
        className={classes.cover}
        image={project.image}
      />
    </Card>
    </div>
 
                    {/* <div>
                    <SupportingProjectTab project={project} user={user} projectOwner={projectOwner}/>
                    </div> */}
                    </div>
             
                    

        )
                }
    