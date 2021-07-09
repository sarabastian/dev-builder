import React, { useEffect } from "react";
import ProjectShowNav from "./Navbars/ProjectShowNav";
import { makeStyles } from "@material-ui/core/styles";
import ProjectTabs from "./Tabs/ProjectTabs";
import { useLocation } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { IconButton } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import { Redirect } from "react-router-dom";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "react-router-dom";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import CardHeader from "@material-ui/core/CardHeader";
import CodeIcon from "@material-ui/icons/Code";

const useChipStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const useStyle = makeStyles({
  root: {
    minWidth: 275,
    height: 200,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 32,
    marginLeft: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: 400,
  },
  details: {
    display: "center",
    // flexDirection: 'column',
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 1500,
    height: 450,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const useAccordionStyles = makeStyles((theme) => ({
  root: {
    width: 200,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

const ProjectShow = () => {
  const data = useLocation();
  const styles = useStyle();

  const accordionClasses = useAccordionStyles();
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [story, setStory] = React.useState(data.state.project.story);
  const [timeline, setTimeline] = React.useState(data.state.project.timeline);
  const [fundraising_goal, setFundraisingGoal] = React.useState(
    data.state.project.fundraising_goal
  );
  const [deleted, setDelete] = React.useState(false);

  const [currentProject, setCurrentProject] = React.useState([]);
  const [updatedProject, setUpdatedProject] = React.useState([]);
  const [changedStory, setClickforChangedStory] = React.useState(false);
  const [changedTimeline, setClickforChangedTimeline] = React.useState(false);
  const [changedFundraising, setClickforChangedFundraising] =
    React.useState(false);
  const chipClasses = useChipStyles();

  const handleStoryChange = (event) => {
    setClickforChangedStory(true);
    setStory(event.target.value);
  };

  const handleTimelineChange = (event) => {
    setClickforChangedTimeline(true);
    setTimeline(event.target.value);
  };

  const handleFundraisingChange = (event) => {
    setClickforChangedFundraising(true);
    setFundraisingGoal(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    setDelete(true);
    fetch(`http://localhost:3001/api/v1/projects/${data.state.project.id}`, {
      method: "DELETE",
    });
  };

  const handleStoryUpdate = () => {
    fetch(`http://localhost:3001/api/v1/projects/${data.state.project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        story: story,
      }),
    })
      .then((res) => res.json())
      .then((project) => setUpdatedProject(project));
  };

  const handleTimelineUpdate = () => {
    fetch(`http://localhost:3001/api/v1/projects/${data.state.project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        timeline: timeline,
      }),
    })
      .then((res) => res.json())
      .then((project) => setUpdatedProject(project));
  };

  const handleFundraisingUpdate = () => {
    fetch(`http://localhost:3001/api/v1/projects/${data.state.project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        fundraising_goal: fundraising_goal,
      }),
    })
      .then((res) => res.json())
      .then((project) => setUpdatedProject(project));
  };

  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/projects/${data.state.project.id}`)
      .then((res) => res.json())
      .then((project) => setCurrentProject(project));
  }, []);

  // console.log(currentProject)

  return deleted ? (
    <Redirect to="/my-projects" />
  ) : (
    <div>
      <ProjectShowNav user={data.state.user} project={data.state.project} />

      <Grid>
        <Card elevation={3} className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography
                className={styles.title}
                color="textSecondary"
                gutterBottom
              >
                {currentProject.title}
                <IconButton onClick={handleClickOpen}>
                  <DeleteOutlinedIcon color="secondary" />

                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"Are you sure you want to delete this project?"}
                    </DialogTitle>

                    <DialogActions>
                      <Button onClick={handleClose} color="primary">
                        No
                      </Button>
                      <Button onClick={handleDelete} color="primary" autoFocus>
                        Yes
                      </Button>
                    </DialogActions>
                  </Dialog>
                </IconButton>
              </Typography>

              <IconButton onClick={handleStoryUpdate}>
                <div className={accordionClasses.root}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<EditIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={accordionClasses.heading}>
                        {changedStory
                          ? updatedProject.story
                          : currentProject.story}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <form>
                        <TextField
                          onChange={(e) => handleStoryChange(e)}
                          autoFocus
                          fullWidth
                          defaultValue={currentProject.story}
                          name="story"
                          fullWidth
                        />
                      </form>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </IconButton>

              <div className={classes.controls}>
                <IconButton onClick={handleTimelineUpdate}>
                  <div className={accordionClasses.root}>
                    <Typography>Timeline</Typography>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<EditIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        minWidth
                      >
                        <Typography className={accordionClasses.heading}>
                          {" "}
                          {changedTimeline
                            ? updatedProject.timeline
                            : currentProject.timeline}{" "}
                          days left
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <TextField
                          onChange={(e) => handleTimelineChange(e)}
                          autoFocus
                          margin="dense"
                          name="timeline"
                          defaultValue={currentProject.timeline}
                          fullWidth
                        />
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </IconButton>

                <IconButton onClick={handleFundraisingUpdate}>
                  <div className={accordionClasses.root}>
                    <Typography>Fundraising Goal</Typography>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<EditIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={accordionClasses.heading}>
                          $
                          {changedFundraising
                            ? updatedProject.fundraising_goal
                            : currentProject.fundraising_goal}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <TextField
                          onChange={(e) => handleFundraisingChange(e)}
                          autoFocus
                          margin="dense"
                          id="name"
                          defaultValue={currentProject.fundraising_goal}
                          name="fundraising_goal"
                        />
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </IconButton>
              </div>
            </CardContent>
          </div>

          <CardMedia
            className={classes.cover}
            image={data.state.project.image}
          />
        </Card>
      </Grid>
      <Paper variant="dense" component="ul" className={chipClasses.root}>
        <Link href={data.state.project.github} variant="body2">
          <Card style={{ border: "none", boxShadow: "none" }}>
            <CardHeader avatar={<GitHubIcon color="secondary" />} />
          </Card>
        </Link>
        <Card style={{ border: "none", boxShadow: "none" }}>
          <CardHeader
            avatar={<LocationOnIcon color="primary" />}
            title={data.state.user.location}
          />
        </Card>

        <Card style={{ border: "none", boxShadow: "none" }}>
          <CardHeader
            avatar={<TimelapseIcon color="primary" />}
            title={currentProject.stage}
            subheader="stage"
          />
        </Card>

        <Card style={{ border: "none", boxShadow: "none" }}>
          <CardHeader
            avatar={<CodeIcon color="primary" />}
            title={currentProject.language}
          />
        </Card>
      </Paper>

      <ProjectTabs
        project={data.state.project}
        user={data.state.user}
        posts={data.state.posts}
        supporters={data.state.supporters}
        comments={data.state.comments}
        commenters={data.state.commenters}
      />
    </div>
  );
};

export default ProjectShow;
