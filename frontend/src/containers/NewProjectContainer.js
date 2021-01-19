import { TableFooter } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import NewProjectNav from '../components/Navbars/NewProjectNav';
import NewProjectCard from '../components/NewProjectCard';
import NewProjectTabs from '../components/Tabs/NewProjectTabs'


function NewProjectContainer() {



    const props = useLocation();
    // const project = [project, setProject] = useState({})
    // const [projects, setProjects] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:3001/api/v1/projects', )
//           .then(res => res.json())
//           .then(projects => setProjects(projects));
//       }, []);

//     const createNew = () => {
//         fetch('http://localhost:3001/api/v1/projects',
//         {
//             method: 'POST',
//             headers: {
//                 // Authorization: `Bearer ${token}`,
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json',

//             },
//             body: JSON.stringify({
//                 title: props.state.title,
//                 story: props.state.story,
//                 timeline: parseInt(props.state.timeline),
//                 fundraising_goal: parseInt(props.state.fundraising_goal),
//                 image: props.state.image,
//                 github: props.state.github,
//                 language: props.state.language,
//                 stage: props.state.stage,
//                 user_id: props.state.data.state.user.id
//             }),
//         })


//         .then(r => r.json())
//         .then(project => {
//             setProjects([...projects, project]);
        
//     })
// }


  

    return (
        <div>
            <NewProjectNav user={props.state.data.state.user} />
            <h1>{props.state.title}</h1>
            <NewProjectCard title={props.state.title} story={props.state.story} timeline={props.state.timeline}
                            fundraising_goal={props.state.fundraising_goal} image={props.state.image}
                            github={props.state.github} language={props.state.language} stage={props.state.stage}
                            user_id= {props.state.data.state.user.id} />
            <NewProjectTabs title={props.state.title} story={props.state.story} timeline={props.state.timeline}
                            fundraising_goal={props.state.fundraising_goal} image={props.state.image}
                            github={props.state.github} language={props.state.language} stage={props.state.stage}
                            user_id= {props.state.data.state.user.id} />
        </div>
    )








};

export default NewProjectContainer;