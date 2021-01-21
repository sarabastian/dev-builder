import React from 'react';
import { useLocation } from "react-router-dom";
import SupportingProjectsCard from '../components/SupportingProjectsCard';
import Grid from '@material-ui/core/Grid'




const SupportingProjectsContainer = () => {

    const data = useLocation()
    const user = data.state.user
    const projectsSupported = user.projects_supported
    console.log(user)

  


    return (




        <div>
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