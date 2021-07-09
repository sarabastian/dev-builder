import React from "react";
import { useLocation } from "react-router-dom";
import NewProjectNav from "../components/Navbars/NewProjectNav";
import NewProjectCard from "../components/NewProjectCard";

function NewProjectContainer() {
  const props = useLocation();
  console.log(props.state.project);
  const project = props.state.project;

  return (
    <div>
      <NewProjectNav user={project.user} />

      <NewProjectCard project={project} user={project.user} />
    </div>
  );
}

export default NewProjectContainer;
