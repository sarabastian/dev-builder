import { TableFooter } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import SearchResultsCard from '../components/SearchResultsCard';
import SearchResultsNav from '../components/Navbars/SearchResultsNav';
import Grid from '@material-ui/core/Grid';




function SearchResultsContainer() {



    const data = useLocation();
    console.log(data.state)
    // console.log(props.state.project)
    // const project = props.state.project



  

    return (
        
      
       
        <div>
            <SearchResultsNav project={data.state.project} user={data.state.user} language={data.state.project.language}/>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                >
            <SearchResultsCard project={data.state.project} user={data.state.user} />

            </Grid>
       
        </div> 
    )








};

export default SearchResultsContainer;