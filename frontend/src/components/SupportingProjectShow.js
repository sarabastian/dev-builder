import React, { useEffect } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import {useLocation} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import SupportingProjectTab from './Tabs/SupportingProjectTab';




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


export default function SupportingProjectShow()  {
    const data = useLocation()
    const classes = useStyles();
    const theme = useTheme();
    const project = data.state.project
    console.log(data)
    const user = data.state.user


    return (
     <div>
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
        </CardContent>

     
      </div>
      <CardMedia
        className={classes.cover}
        image={project.image}
      />
    </Card>
    </div>
 
                    <div>
                    <SupportingProjectTab project={project} user={user}/>
                    </div>
                    </div>
             
                    

        )
                }
    