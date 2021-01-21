import React from 'react';
import { useLocation } from "react-router-dom";
import SupportingProjectsCard from '../components/SupportingProjectsCard';
import Grid from '@material-ui/core/Grid';
import SupportingProjectsContainerNavbar from '../components/Navbars/SupportingProjectsContainerNavbar'




const SupportingProjectsContainer = () => {

    const data = useLocation()
    const user = data.state.user
    const projectsSupported = user.projects_supported
    console.log(user)

  


    return (




        <div>
            <SupportingProjectsContainerNavbar user={user} collaborate_requests={user.collaborate_project_requests}/>

            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                >



                {projectsSupported.map(project => <SupportingProjectsCard project={project} key={project.id} user={data.state.user} />)}
            </Grid>







        </div>
    )


}

export default SupportingProjectsContainer;