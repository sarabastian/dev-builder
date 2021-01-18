import React from 'react';

import ProjectCard from '../components/ProjectCard';
// import { Paper } from '@material-ui/core';
import MainNavbar from '../components/MainNavbar'


class Main extends React.Component {

state = {
    projects: [],
    user: {}

}



componentDidMount() {
  

    fetch(`http://localhost:3001/api/v1/users/${parseInt(localStorage.token)}`)
    .then(r => r.json())
    .then(user => {
        this.setState({
           projects: user.projects,
           user: user
        })
    }
    )
}


    render() {
                console.log(this.state.user)

        return(
        
         
          

<div>
    <MainNavbar user={this.state.user} key={this.state.user.id} />

  {this.state.projects.map(project => <ProjectCard project={project} key={project.id} />)}

  </div>



        )
    }
}

export default Main;