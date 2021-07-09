import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./containers/Main";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProjectShow from "./components/ProjectShow";
import CreateProject from "./components/CreateProject";
import NewProjectContainer from "./containers/NewProjectContainer";
import SupportingProjectsContainer from "./containers/SupportingProjectsContainer";
import SupportingProjectShow from "./components/SupportingProjectShow";
import SearchResultsContainer from "./containers/SearchResultsContainer";
import SearchResultsShow from "./components/SearchResultsShow";
import LandingPage from "./containers/LandingPage";
import { Redirect } from "react-router-dom";

class App extends React.Component {
  state = {
    isloggedin: false,
  };

  componentDidMount() {
    this.handleLogin();
  }

  handleLogin = () => {
    if (localStorage.getItem("token")) {
      this.setState({ isloggedin: true });
    }
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={() => <LandingPage />} />
            <Route
              exact
              path="/login"
              component={() => (
                <Login
                  login={this.state.isloggedin}
                  handleLogin={this.handleLogin}
                />
              )}
            />
            <Route
              exact
              path="/signup"
              component={() => (
                <Signup
                  login={this.state.isloggedin}
                  handleLogin={this.handleLogin}
                />
              )}
            />
            <Route exact path="/my-projects" component={() => <Main />} />
            <Route
              exact
              path="/search"
              component={() => <SearchResultsContainer />}
            />
            <Route
              exact
              path="/search-results"
              component={() => <SearchResultsShow />}
            />
            <Route exact path="/show" component={() => <ProjectShow />} />
            <Route exact path="/create" component={() => <CreateProject />} />
            <Route
              exact
              path="/new"
              component={() => <NewProjectContainer />}
            />
            <Route
              exact
              path="/supporting-projects"
              component={() => <SupportingProjectsContainer />}
            />
            <Route
              exact
              path="/supporting-project"
              component={() => <SupportingProjectShow />}
            />
            <Route
              exact
              path="/logout"
              component={() => {
                localStorage.clear();

                return <Redirect to="/login" />;
              }}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
