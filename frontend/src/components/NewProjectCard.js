import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useLocation} from "react-router-dom";
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


function NewProjectCard(props) {


    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.title}
          </Typography>
                <Typography variant="h5" component="h2">
                   {props.story}
          </Typography>
                <Typography className={classes.pos} color="textSecondary">
                   timeline: {props.timeline} days
          </Typography>
                <Typography variant="body2" component="p">
                    fundraising goal: ${props.fundraising_goal}
            <br />
        
                <Link href={props.github} >
                    <GitHubIcon />
                </Link>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>

    )
}

export default NewProjectCard