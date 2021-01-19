import React from 'react';
import ProjectShowNav from './Navbars/ProjectShowNav';

import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ProjectTabs from './Tabs/ProjectTabs';
import {useLocation} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from '@material-ui/core';




const ProjectShow = () =>  {
  const useStyle = makeStyles({
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
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
  });
  
  // console.log(useLocation())
  const data = useLocation()
  const styles = useStyle();
  // const bull = <span className={classes.bullet}>•</span>;
  const useStyles = makeStyles((theme) => ({
    root: {
      height: 180,
    },
    container: {
      display: 'flex',
    },
    paper: {
      margin: theme.spacing(1),
    },
    svg: {
      width: 100,
      height: 100,
    },
    polygon: {
      fill: theme.palette.common.white,
      stroke: theme.palette.divider,
      strokeWidth: 1,
    },
  }));
  

    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);
  
    const handleChange = () => {
      setChecked((prev) => !prev);
    };
    const info = useLocation()
    // console.log(data.state)

    return (

  <div>
      <ProjectShowNav user={info.state.user} project={info.state.project}/>
   
      <div className={classes.root}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show"
        />
        <div className={classes.container}>
          <Grow in={checked}>
            <Paper elevation={4} className={classes.paper}>
              <svg className={classes.svg}>
                <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
              </svg>
            </Paper>
          </Grow>
          {/* Conditionally applies the timeout prop to change the entry speed. */}
          <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
          >
            <Paper elevation={4} className={classes.paper}>
              <svg className={classes.svg}>
                <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
              </svg>
            </Paper>
          </Grow>
        </div>
      </div>
      <Card className={styles.root} variant="outlined">
            <CardContent>
                <Typography className={styles.title} color="textSecondary" gutterBottom>
                    {data.state.project.title}
          </Typography>
                <Typography variant="h5" component="h2">
                   {data.state.project.story}
          </Typography>
                <Typography className={styles.pos} color="textSecondary">
                   timeline: {data.state.project.timeline} days
          </Typography>
                <Typography variant="body2" component="p">
                    fundraising goal: ${data.state.project.fundraising_goal}
            <br />
        
                <Link href={data.state.project.github} >
                    <GitHubIcon />
                </Link>
                </Typography>
            </CardContent>
      
        </Card>
  
      <ProjectTabs project={data.state.project} user={data.state.user} posts={data.state.posts}
                  supporters={data.state.supporters}/>
      </div>
    


        )
    }


export default ProjectShow;