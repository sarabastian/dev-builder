import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import NewProjectNav from '../components/NewProjectNav'


function NewProjectContainer() {



    const props = useLocation();
    // const project = [project, setProject] = useState({})

    useEffect(() => {
        fetch('http://localhost:3001/api/v1/projects',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'

                },
                body: JSON.stringify({
                    title: props.state.title,
                    story: props.state.story,
                    timeline: parseInt(props.state.timeline),
                    fundraising_goal: parseInt(props.state.fundraising_goal),
                    image: props.state.image,
                    github: props.state.github,
                    language: props.state.language,
                    stage: props.state.stage,
                    user_id: props.state.data.state.user.id
                }),
            })


            .then(r => r.json())
            .then(project => console.log(project))

    }, [])


    return (
        <div>
            <NewProjectNav user={props.state.data.state.user} />
            <h1>{props.state.title}</h1>
        </div>
    )








};

export default NewProjectContainer;