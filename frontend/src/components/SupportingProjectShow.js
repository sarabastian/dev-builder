import React, { useEffect } from 'react';
import ProjectShowNav from './Navbars/ProjectShowNav';

import { makeStyles } from '@material-ui/core/styles';
import ProjectTabs from './Tabs/ProjectTabs';
import {useLocation} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IconButton } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { Redirect } from 'react-router-dom';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';



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
      fontSize: 24,
  },
  pos: {
      marginBottom: 12,
  },
});


const useAccordionStyles = makeStyles((theme) => ({
  root: {
    width: '400%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const SupportingProjectShow = () =>  {
    const data = useLocation()
    const styles = useStyle();
    const accordionClasses = useAccordionStyles();


    const [open, setOpen] = React.useState(false);


  
 
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
  
  
    

   
  // console.log(useLocation())

 
// useEffect(() => {
//   fetch(`http://localhost:3001/api/v1/projects/${data.state.project.id}`)
//     .then(res => res.json())
//     .then(project => setCurrentProject(project));
// }, []);

  
    // console.log(currentProject)

    return (
     
  <div>
  
   
      <ProjectShowNav user={data.state.user} project={data.state.project}/>

      <div>
      <Card className={styles.root} variant="outlined">
            <CardContent>
                <Typography className={styles.title} color="textSecondary" gutterBottom>
                    {currentProject.title}
                    
          </Typography>
        
          
       
                 
                 

            </CardContent>
      
        </Card>
        </div>
      
  
      <ProjectTabs project={data.state.project} user={data.state.user} posts={data.state.posts}
                  supporters={data.state.supporters} comments={data.state.comments}
                  commenters={data.state.commenters} />
                
                    
                    
               
              </div>      
 
                    
                    
                    

        )
    


export default ProjectShow;