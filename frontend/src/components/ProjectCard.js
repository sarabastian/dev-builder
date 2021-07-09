import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class ProjectCard extends React.Component {
  state = {
    clicked: false,
    project: [],
  };

  componentDidMount() {
    fetch(`http://localhost:3001/api/v1/projects/${this.props.project.id}`)
      .then((r) => r.json())
      .then((project) => this.setState({ project }));
  }

  handleClick = () => {
    this.setState({
      clicked: true,
    });
  };
  render() {
    //  console.log(this.state.project.supporters)

    return (
      <Card className="project-card">
        <CardActionArea>
          <img src={this.props.project.image} title="Contemplative Reptile" />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.state.project.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.state.project.story}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>

          <Link
            to={{
              pathname: "/show",
              state: {
                project: this.state.project,
                key: this.state.project.id,
                user: this.props.user,
                posts: this.state.project.posts,
                comments: this.state.project.comments,
                commenters: this.state.project.commenters,
                supporters: this.state.project.supporters,
                requesters: this.state.project.requesters,
              },
            }}
            style={{ textDecoration: "none" }}
          >
            <Button size="small" color="primary">
              Manage
            </Button>
          </Link>
        </CardActions>
      </Card>
    );
  }
}

export default withRouter(ProjectCard);
