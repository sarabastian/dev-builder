import React, { useEffect, useState } from 'react';
import { Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import {useLocation} from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { checkPropTypes } from 'prop-types';
import { useHistory } from "react-router-dom";




const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));

function getSteps() {
    return ['1', '2', '3', '4', '5', '6', '7', '8'];
  }
  
function CreateProject() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const [title, setTitle] = useState('');
    const [story, setStory] = useState('');
    const [timeline, setTimeline] = useState(null);
    const [image, setImage] = useState('')
    const [fundraising_goal, setFundraisingGoal] = useState(null);
    const [github, setGithub] = useState('');
    const [language, setLanguage] = useState('');
    const [stage, setStage] = useState('');
    const [project, setProject] = useState([]);
    const data = useLocation();



    const handleNext = (e) => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    const history = useHistory();

  
    const createNew = () => {
        fetch('http://localhost:3001/api/v1/projects',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',

            },
            body: JSON.stringify({
                title: title,
                story: story,
                timeline: parseInt(timeline),
                fundraising_goal: parseInt(fundraising_goal),
                image: image,
                github: github,
                language: language,
                stage: stage,
                user_id: data.state.user.id
            }),
        })


        .then(r => r.json())
        .then(project => 
          history.push({
              pathname: "/new", 
              state: {
                  project
              }})
          )}


    // const details = {
    //     'Title': title,
    //     'Story': story,
    //     'Timeline': timeline,
    //     'Fundraising Goal': fundraising_goal,
    //     'Image': image,
    //     'Github': github,
    //     'Language': language,
    //     'Stage': stage,
    //     'User': data.state.user

    // }
    // console.log(details);



    return (
      
       
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">

                <Step >
                    <StepLabel>Name your Campaign</StepLabel>
                    <StepContent>
                        <Typography>
                            <Input onChange={e => setTitle(e.target.value)} >
                                {/* {getStepContent(index)} */}

                            </Input>
                        </Typography>

                        <div className={classes.actionsContainer}>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.button}
                                >
                                    Back
                  </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>

                            </div>
                        </div>



                    </StepContent>
                </Step>
                <Step >
                    <StepLabel>Write your story</StepLabel>
                    <StepContent>
                        <Typography>
                            <Input onChange={e => setStory(e.target.value)} >
                                {/* {getStepContent(index)} */}

                            </Input>
                        </Typography>

                        <div className={classes.actionsContainer}>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.button}
                                >
                                    Back
                  </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>

                            </div>
                        </div>



                    </StepContent>
                </Step>
                <Step >
                    <StepLabel>What's your timeline (i.e. number of days to complete)?</StepLabel>
                    <StepContent>
                        <Typography>
                            <Input onChange={e => setTimeline(e.target.value)} >
                                {/* {getStepContent(index)} */}

                            </Input>
                        </Typography>

                        <div className={classes.actionsContainer}>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.button}
                                >
                                    Back
                  </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>

                            </div>
                        </div>



                    </StepContent>
                </Step>
                <Step >
                    <StepLabel>Do you have a fundraising goal? Enter the amount you want to reach</StepLabel>
                    <StepContent>
                        <Typography>
                            <Input onChange={e => setFundraisingGoal(e.target.value)} >
                                {/* {getStepContent(index)} */}

                            </Input>
                        </Typography>

                        <div className={classes.actionsContainer}>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.button}
                                >
                                    Back
                  </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>

                            </div>
                        </div>



                    </StepContent>
                </Step>
                <Step >
                    <StepLabel>Paste the source of your project's cover image</StepLabel>
                    <StepContent>
                        <Typography>
                            <Input onChange={e => setImage(e.target.value)} >
                                {/* {getStepContent(index)} */}

                            </Input>
                        </Typography>

                        <div className={classes.actionsContainer}>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.button}
                                >
                                    Back
                  </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>

                            </div>
                        </div>



                    </StepContent>
                </Step>
                <Step >
                    <StepLabel>Link your Github</StepLabel>
                    <StepContent>
                        <Typography>
                            <Input onChange={e => setGithub(e.target.value)} >
                                {/* {getStepContent(index)} */}

                            </Input>
                        </Typography>

                        <div className={classes.actionsContainer}>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.button}
                                >
                                    Back
                  </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>

                            </div>
                        </div>



                    </StepContent>
                </Step>
                <Step >
                    <StepLabel>What language/stack are you using?</StepLabel>
                    <StepContent>
                        <Typography>
                            <Input onChange={e => setLanguage(e.target.value)} >
                                {/* {getStepContent(index)} */}

                            </Input>
                        </Typography>

                        <div className={classes.actionsContainer}>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.button}
                                >
                                    Back
                  </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>

                            </div>
                        </div>



                    </StepContent>
                </Step>
                <Step >
                    <StepLabel>What stage are you at (i.e. early, mid, late)?</StepLabel>
                    <StepContent>
                        <Typography>
                            <Input onChange={e => setStage(e.target.value)} >
                                {/* {getStepContent(index)} */}

                            </Input>
                        </Typography>

                        <div className={classes.actionsContainer}>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.button}
                                >
                                    Back
                  </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>

                            </div>
                        </div>



                    </StepContent>
                </Step>

            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
              
                       <Button onClick={createNew}  className={classes.button}>
                            Create
          </Button>
                
                    <Button onClick={handleReset} className={classes.button}>
                        Reset
          </Button>

                </Paper>
            )}
        </div>
 
    );
}

export default withRouter(CreateProject)