import React, { Component } from "react";
import UserList from "./UserList";

import { CardDeck } from "react-bootstrap";

class Users extends Component {
  render() {
    return (
      <div>
        {this.props.users.map(user => {
          return <UserList key={user.id} user={user} />;
        })}
      </div>
    );
  }
}

export default Users;
