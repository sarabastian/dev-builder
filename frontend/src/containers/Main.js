import React from "react";

import ProjectCard from "../components/ProjectCard";
import MainNavbar from "../components/Navbars/MainNavbar";

class Main extends React.Component {
  state = {
    projects: [],
    user: {},
  };

  componentDidMount() {
    fetch(`http://localhost:3001/api/v1/users/${parseInt(localStorage.token)}`)
      .then((r) => r.json())
      .then((user) => {
        this.setState({
          projects: user.projects,
          user: user,
        });
      });
  }

  render() {
    return (
      <div>
        <MainNavbar
          user={this.state.user}
          key={this.state.user.id}
          projects_supported={this.state.user.projects_supported}
          collaborate_requests={this.state.user.collaborate_project_requests}
        />

        {this.state.projects.map((project) => (
          <ProjectCard
            user={this.state.user}
            project={project}
            key={project.id}
            posts={project.posts}
            supporters={project.supporters}
            comments={project.comments}
            commenters={project.commenters}
            collaborate_requests={project.collaborate_requests}
            requesters={project.requesters}
          />
        ))}
      </div>
    );
  }
}

export default Main;
