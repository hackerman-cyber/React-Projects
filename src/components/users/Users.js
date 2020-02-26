import React, { Component } from "react";
import UserList from "./UserList";
import Spinner from "../layout/Spinner";
import { PropTypes } from "prop-types";

class Users extends Component {
  render() {
    if (this.props.loading) {
      return <Spinner />;
    } else {
      return (
        <div>
          {this.props.users.map(user => {
            return <UserList key={user.id} user={user} />;
          })}
        </div>
      );
    }
  }
}

Users.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired
};

export default Users;
