import React, { useEffect } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(),
      width: "auto",
    },
  },

  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Search(props) {
  useEffect(() => {
    fetch("http://localhost:3001/api/v1/projects/")
      .then((res) => res.json())
      .then((projects) => setProjects(projects));
  }, []);

  const classes = useStyles();
  const [projects, setProjects] = React.useState([]);
  const [language, setLanguage] = React.useState("");
  const [click, setClick] = React.useState(false);
  const history = useHistory();

  const handleClick = (e) => {
    setClick(true);
  };

  const handleLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const searchResults = projects.filter(
    (project) => project.language.toUpperCase() === language.toUpperCase()
  );

  const accurateResults = searchResults.filter(
    (r) => r.user_id != props.user.id
  );
  console.log(accurateResults.map);
  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <Link
          to={{
            pathname: "/search",
            state: {
              accurateResults,
              user: props.user,
            },
          }}
        >
          <IconButton onClick={handleClick}>
            {" "}
            <SearchIcon />
          </IconButton>
        </Link>

        <InputBase
          onChange={handleLanguage}
          placeholder="Search by language"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          value={language}
        />
      </div>
    </div>
  );
}
