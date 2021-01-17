import React from 'react';

import ProjectCard from '../components/ProjectCard';
// import { Paper } from '@material-ui/core';
import Navbar from '../components/Navbar'


class Main extends React.Component {

state = {
    projects: []

}



componentDidMount() {
  

    fetch(`http://localhost:3001/api/v1/users/${parseInt(localStorage.token)}`)
    .then(r => r.json())
    .then(user => {
        console.log(user.projects)
        this.setState({
           projects: user.projects
        })
    }
    )
}


    render() {
        
        return(
        
         
          

<div>
<Navbar />

  {this.state.projects.map(project => <ProjectCard project={project} key={project.id} />)}

  </div>



        )
    }
}

export default Main;