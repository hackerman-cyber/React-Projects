import React from "react";
import RepoItem from "./RepoItem";

const Repos = props => {
  console.log(props.repos);
  return props.repos.map(repo => {
    return (
      <div className="card" style={{ width: "auto" }}>
        <ul className="list-group list-group-flush my-2 py-2">
          <RepoItem key={repo.id} repos={repo} />
        </ul>
      </div>
    );
  });
};

export default Repos;
