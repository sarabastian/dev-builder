import { TableFooter } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router-dom";
import SearchResultsCard from "../components/SearchResultsCard";
import SearchResultsNav from "../components/Navbars/SearchResultsNav";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

function SearchResultsContainer() {
  const data = useLocation();

  const f = () => {
    let lang = data.state.accurateResults.map((project) => project.language);
    return lang[0];
  };

  return (
    <div>
      <SearchResultsNav
        user={data.state.user}
        language={f()}
        accurateResults={data.state.accurateResults}
      />
      <Container mx="auto" p={3}>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          {data.state.accurateResults.map((project) => (
            <SearchResultsCard
              project={project}
              key={project.id}
              user={data.state.user}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default SearchResultsContainer;
