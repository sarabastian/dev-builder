import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LandingPageNav from '../components/Navbars/LandingPageNav';
import devstarter from './dev-starter.jpg'

export default function LandingPage() {
  return (
    <React.Fragment>
 
      <LandingPageNav />
      <Container style={{backgroundImage: `url(${devstarter})`}}>
         
         
      </Container>
     
    </React.Fragment>
  );
}