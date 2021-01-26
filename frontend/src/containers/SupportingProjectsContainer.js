import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import SupportingProjectsCard from '../components/SupportingProjectsCard';
import Grid from '@material-ui/core/Grid';
import SupportingProjectsContainerNavbar from '../components/Navbars/SupportingProjectsContainerNavbar'




const SupportingProjectsContainer = () => {
    useEffect(() => {
        fetch('http://localhost:3001/api/v1/supporterships/')
        .then(res => res.json())
        .then(supporterships => setSupporterships(supporterships));
        }, [])

    const data = useLocation()
    const user = data.state.user
    const [supporterships, setSupporterships] = useState([]);
    const projectsSupported = supporterships.filter(s => s.user_id === user.id)




    return (




        <div>
            <SupportingProjectsContainerNavbar user={user} collaborate_requests={user.collaborate_project_requests}/>

            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                >



                {projectsSupported.map(project => <SupportingProjectsCard project={project.project} key={project.project.id} user={data.state.user} />)}
            </Grid>







        </div>
    )


}

export default SupportingProjectsContainer;