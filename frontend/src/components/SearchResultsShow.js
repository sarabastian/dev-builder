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
import SearchResultsNav from './Navbars/SearchResultsNav'




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
    const [supporterships, setSupporterships] = React.useState([]);
    console.log(user)

    // useEffect(() => {
    // fetch('http://localhost:3001/api/v1/supporterships/')
    // .then(res => res.json())
    // .then(supporterships => setSupporterships(supporterships));
    // }, [])


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
<SearchResultsNav project={data.state.project} user={data.state.user} language={data.state.project.language}/>
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

{/* {user.projects_supported.forEach(p => p.id === project.id) ? 

<Button
         variant="contained"
         color="secondary"
         className={classes.button}
         startIcon={<AddIcon />}
         >Already Supporting</Button> :
<Button onClick={createSupportership()}
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<AddIcon />}
      >
        Support
      </Button> } */}
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
    