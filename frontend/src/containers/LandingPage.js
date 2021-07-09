import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import landing from "./landing.gif";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <>
      <Box bgcolor="primary" p={2}>
        <img src={landing} width={800} height={750} />
        <div className={classes.root}>
          <ButtonGroup
            variant="text"
            color="primary"
            aria-label="text primary button group"
          >
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button color="primary">Login</Button>
            </Link>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              {" "}
              <Button color="primary">Signup</Button>
            </Link>
          </ButtonGroup>
        </div>
      </Box>
    </>
  );
}
