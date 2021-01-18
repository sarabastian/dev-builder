import React, {useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";


function NewProjectContainer() {

    const [project, setProject] = useState('');

    const props = useLocation();

   React.useEffect(function effectFunction() {

        fetch('http://localhost:3001/api/v1/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
        
            },
            body: JSON.stringify({ 
                title: props.state.title,
                    story: props.state.story,
                    timeline: props.state.timeline,
                    fundraisingGoal: parseInt(props.state.fundraisingGoal),
                    github: props.state.github,
                    language: props.state.language,
                    stage: props.state.stage, 
                    user_id: props.state.data.state.user.id
            }),
        })
        .then(r=> r.json())
        .then(project => setProject(project))
    
    
    })



        return(

            
<h1>hi</h1>



        )
    
};

export default NewProjectContainer;