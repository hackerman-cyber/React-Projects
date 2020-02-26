import React, { Component } from "react";
import UserList from "./UserList";

import { CardDeck } from "react-bootstrap";

class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "JanaSabuj",
        avatar_url:
          "https://avatars0.githubusercontent.com/u/39147514?s=460&v=4",
        html_url: "https://github.com/JanaSabuj"
      },
      {
        id: "2",
        login: "Ninad99",
        avatar_url:
          "https://avatars2.githubusercontent.com/u/39592667?s=460&v=4",
        html_url: "https://github.com/Ninad99"
      },
      {
        id: "3",
        login: "rafi-kamal",
        avatar_url:
          "https://avatars2.githubusercontent.com/u/1899039?s=460&v=4",
        html_url: "https://github.com/rafi-kamal"
      }
    ]
  };

  render() {
    return (
      <div>
        <CardDeck>
          {this.state.users.map(user => {
            return <UserList key={user.id} user={user} />;
          })}
        </CardDeck>
      </div>
    );
  }
}

export default Users;
