import { TableFooter } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import SearchResultsCard from '../components/SearchResultsCard'



function SearchResultsContainer() {



    const data = useLocation();
    console.log(data.state)
    // console.log(props.state.project)
    // const project = props.state.project



  

    return (
        <div>
            <SearchResultsCard project={data.state.project} user={data.state.user} />

       
       
        </div> 
    )








};

export default SearchResultsContainer;