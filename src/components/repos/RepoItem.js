import React from "react";

const RepoItem = props => {
  console.log(props.repos);
  return (
    <li class="list-group-item">
      {props.repos.name}
      <a href={props.repos.owner.html_url}> Link </a>
    </li>
  );
};

export default RepoItem;
