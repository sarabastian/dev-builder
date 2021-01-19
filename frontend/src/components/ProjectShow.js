import React from 'react';
import ProjectShowNav from './Navbars/ProjectShowNav';

import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ProjectTabs from './Tabs/ProjectTabs';
import {useLocation} from "react-router-dom";




const ProjectShow = () =>  {
  console.log(useLocation())
  const data = useLocation()
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
      <ProjectTabs project={data.state.project} user={data.state.user}/>
      </div>
    
  
    

        
          
     
        
/* <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
  
>hello</Grid> */


        )
    }


export default ProjectShow;