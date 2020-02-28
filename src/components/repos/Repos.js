import React from "react";
import RepoItem from "./RepoItem";

const Repos = props => {
  return props.repos.map(repo => {
    return (
      <div class="card" style={{ width: "auto" }}>
        <ul class="list-group list-group-flush my-2 py-2">
          <RepoItem repos={repo} key={repo.id} />
        </ul>
      </div>
    );
  });
};

export default Repos;
