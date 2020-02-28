import React from "react";

const RepoItem = props => {
  return (
    <li class="list-group-item">
      {props.repos.name}
      <a href={props.repos.html_url} target="_blank" rel="noopener noreferrer">
        {" "}
        Link{" "}
      </a>
    </li>
  );
};

export default RepoItem;
