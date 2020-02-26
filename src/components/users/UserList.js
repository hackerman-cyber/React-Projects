import React from "react";
import { Card, Button } from "react-bootstrap";
// stateless component. so better to use react func components

const UserList = props => {
  const { login, avatar_url, html_url } = props.user;
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
};

export default UserList;
