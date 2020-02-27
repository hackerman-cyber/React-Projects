import React from "react";
import { Card, Button } from "react-bootstrap";
import { PropTypes } from "prop-types";
// stateless component. so better to use react func components

const UserList = props => {
  const { login, avatar_url, html_url } = props.user;
  return (
    <Card style={{ width: "18rem" }} className="card-custom mx-2 mb-3">
      <Card.Img variant="top" src={avatar_url} style={{ width: "18rem" }} />
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

UserList.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserList;
