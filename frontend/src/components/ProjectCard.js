import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import ProjectShow from './ProjectShow.js'


class ProjectCard extends React.Component {

state = {

    clicked: false
}

handleClick = () => {

    this.setState({
        clicked: true
    })
}
 render(){

    return (
       
        <Card className="project-card">
            <CardActionArea>

         
         <img src={this.props.project.image}
          title="Contemplative Reptile" />
    
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.props.project.title}
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.project.story}
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>

        <Link to={{
            pathname: "/show",
            state: {
              project: this.props.project,
              key: this.props.project.id
    
            }
            
           }} >
        <Button size="small" color="primary">
          Manage
         
        </Button>
        </Link>
       
      </CardActions>
        </Card>
        
    )
 }
}



export default ProjectCard;