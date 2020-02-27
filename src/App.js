import React from "react";
import "./styles.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";

import axios from "axios";

library.add(fab);

class App extends React.Component {
  state = {
    users: [],
    loading: false
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
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({
      users: res.data.items,
      loading: false
    });
  };

  clearUsers = () => {
    this.setState({
      users: [],
      loading: false
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Navbar title="Github Finder" icons={["fab", "github"]} />
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
