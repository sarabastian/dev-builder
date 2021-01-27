import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LandingPageNav from '../components/Navbars/LandingPageNav';
import landing  from './landing.gif'

export default function LandingPage() {

   

  return (
    <React.Fragment>
 
      <LandingPageNav />
      <Container >
         <img src={landing} maxWidth/>
         
      </Container>
     
    </React.Fragment>
  );
}