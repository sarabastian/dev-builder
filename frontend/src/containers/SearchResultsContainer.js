import { TableFooter } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import SearchResultsCard from '../components/SearchResultsCard';
import SearchResultsNav from '../components/Navbars/SearchResultsNav'



function SearchResultsContainer() {



    const data = useLocation();
    console.log(data.state)
    // console.log(props.state.project)
    // const project = props.state.project



  

    return (
        
      
       
        <div>
            <SearchResultsNav project={data.state.project} user={data.state.user} language={data.state.project.language}/>
            <SearchResultsCard project={data.state.project} user={data.state.user} />

       
       
        </div> 
    )








};

export default SearchResultsContainer;