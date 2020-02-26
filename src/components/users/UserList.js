import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class UserList extends Component {
  state = {
    id: "583231",
    login: "JanaSabuj",
    avatar_url: "https://avatars0.githubusercontent.com/u/39147514?s=460&v=4",
    html_url: "https://github.com/JanaSabuj"
  };

  render() {
    const { login, avatar_url, html_url } = this.state;
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={avatar_url} />
        <Card.Body>
          <Card.Title>{login}</Card.Title>
          <Card.Text />
          <Button variant="success">
            <Card.Link href={html_url} style={{ color: "black" }}>
              Github Link
            </Card.Link>
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default UserList;
