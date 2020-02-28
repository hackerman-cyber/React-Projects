import React, { Fragment } from "react";
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

library.add(fab);

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: {
      val: false,
      msg: ""
    },
    user: {}
  };

  // async componentDidMount() {
  //   console.log("MOUNTED!!!", process.env.REACT_APP_GITHUB_CLIENT_SECRET);

  //   this.setState({
  //     loading: true
  //   });

  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   this.setState({
  //     users: res.data,
  //     loading: false
  //   });

  //   console.log(res.data);
  // }

  // Passed up prop function from Search.js
  searchUsers = async text => {
    this.setState({
      loading: true
    });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({
      users: res.data.items,
      loading: false
    });
  };

  // clear users
  clearUsers = () => {
    this.setState({
      users: [],
      loading: false
    });
  };

  //set alert
  setAlert = msg => {
    this.setState({
      alert: {
        val: true,
        msg: msg
      }
    });

    setTimeout(() => {
      this.setState({
        alert: {
          val: false,
          msg: ""
        }
      });
    }, 3000);
  };

  // get a single Github user
  getUser = async username => {
    this.setState({
      loading: true
    });

    const res = await axios.get(
      `https://api.github.com/users/${username}?q=client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({
      user: res.data,
      loading: false
    });
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="container">
            <Navbar title="Github Finder" icons={["fab", "github"]} />
            <Alert alertInfo={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => {
                  return (
                    <Fragment>
                      <Search
                        searchUsers={this.searchUsers}
                        clearUsers={this.clearUsers}
                        showClear={this.state.users.length > 0 ? true : false}
                        setAlert={this.setAlert}
                      />
                      <Users
                        loading={this.state.loading}
                        users={this.state.users}
                      />
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
                      getUser={this.getUser}
                      user={this.state.user}
                      loading={this.state.loading}
                    />
                  );
                }}
              />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
