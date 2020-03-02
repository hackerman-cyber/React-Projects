import React, { useState, Fragment } from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/layout/About";
import User from "./components/users/User";

import axios from "axios";

import GithubState from "./context/github/GithubState";

library.add(fab);

const App = () => {
  let GCI;
  let GCS;

  if (process.env.NODE_ENV !== "production") {
    GCI = process.env.REACT_APP_GITHUB_CLIENT_ID;
    GCS = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
  } else {
    GCI = process.env.GITHUB_CLIENT_ID;
    GCS = process.env.GITHUB_CLIENT_SECRET;
  }

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ val: false, msg: "" });
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  // Passed up prop function from Search.js
  // const searchUsers = async text => {
  //   setLoading(true);

  //   const res = await axios.get(
  //     `https://api.github.com/search/users?q=${text}&client_id=${GCI}&client_secret=${GCS}`
  //   );

  //   setUsers(res.data.items);
  //   setLoading(false);
  // };

  // clear users
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  //set alert
  const showAlert = msg => {
    setAlert({ val: true, msg: msg });

    setTimeout(() => {
      setAlert({ val: false, msg: "" });
    }, 3000);
  };

  // get a single Github user
  const getUser = async username => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}?q=client_id=${GCI}&client_secret=${GCS}`
    );
    setUser(res.data);
    setLoading(false);
  };

  //get user repos
  const getUserRepos = async username => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&q=client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setRepos(res.data);
    setLoading(false);
  };

  return (
    <GithubState>
      <Router>
        <React.Fragment>
          <div className="container">
            <Navbar title="Github Finder" icons={["fab", "github"]} />
            <Alert alertInfo={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => {
                  return (
                    <Fragment>
                      <Search
                        clearUsers={clearUsers}
                        showClear={users.length > 0 ? true : false}
                        setAlert={showAlert}
                      />
                      <Users loading={loading} users={users} />
                    </Fragment>
                  );
                }}
              />
              <Route path="/about" component={About} />
              <Route
                path="/user/:login"
                render={props => {
                  return (
                    <User
                      {...props}
                      getUser={getUser}
                      user={user}
                      loading={loading}
                      getUserRepos={getUserRepos}
                      repos={repos}
                    />
                  );
                }}
              />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </GithubState>
  );
};

export default App;
