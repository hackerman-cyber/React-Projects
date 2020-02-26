import React from "react";
import "./styles.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/UserList";

library.add(fab);

class App extends React.Component {
  render() {
    return (
      <div className="App ">
        <Navbar title="Github Finder" icons={["fab", "github"]} />
        <UserItem />
      </div>
    );
  }
}

export default App;
