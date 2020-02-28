import React, { Component } from "react";

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      login,
      avatar_url,
      html_url,
      name,
      blog,
      location
    } = this.props.user;

    console.log(this.props.user);
    return (
      <div>
        {name} {blog}
      </div>
    );
  }
}

export default User;
